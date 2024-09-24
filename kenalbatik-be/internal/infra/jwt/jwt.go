package jwt

import (
	"kenalbatik-be/internal/infra/env"
	"log"
	"strconv"
	"time"

	"github.com/google/uuid"

	"github.com/golang-jwt/jwt/v5"
)

type JWTInterface interface {
	GenerateToken(id uuid.UUID) (string, error)
	ValidateToken(tokenString string) (uuid.UUID, error)
}

type JWT struct {
	SecretKey   string
	ExpiredTime time.Duration
}

type Claims struct {
	Id uuid.UUID
	jwt.RegisteredClaims
}

func NewJWT() *JWT {
	secretKey := env.AppEnv.JWT_SECRET

	expiredTime, err := strconv.Atoi(env.AppEnv.JWT_EXPIRED)
	if err != nil {
		log.Fatal("failed to convert JWT expired time to integer")
	}

	return &JWT{
		SecretKey:   secretKey,
		ExpiredTime: time.Duration(expiredTime) * time.Hour,
	}
}

func (j *JWT) GenerateToken(id uuid.UUID) (string, error) {
	claim := Claims{
		Id: id,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(j.ExpiredTime)),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claim)

	tokenString, err := token.SignedString([]byte(j.SecretKey))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func (j *JWT) ValidateToken(tokenString string) (uuid.UUID, error) {
	var claim Claims
	var id uuid.UUID

	token, err := jwt.ParseWithClaims(tokenString, &claim, func(t *jwt.Token) (interface{}, error) {
		return []byte(j.SecretKey), nil
	})

	if err != nil {
		return id, err
	}

	if !token.Valid {
		return id, err
	}

	id = claim.Id

	return id, nil
}
