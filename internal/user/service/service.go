package service

import (
	"context"
	"errors"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/jwt"
	"kenalbatik-be/internal/user/repository"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserService interface {
	RegisterUser(ctx context.Context, userRegister domain.UserRegister) error
	Login(ctx context.Context, userLogin domain.UserLogin) (domain.UserLoginResponse, error)
}

type userService struct {
	userRepo repository.Userepository
	jwt jwt.JWT
}

func NewUserService(userRepo repository.Userepository, jwt jwt.JWT) UserService {
	return &userService{
		userRepo: userRepo,
		jwt: jwt,
	}
}

func (s *userService) RegisterUser(ctx context.Context, userRegister domain.UserRegister) error {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var user domain.User

	err := s.userRepo.FindUser(ctx, &user, domain.UserParam{Email: userRegister.Email})
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}

	if user.Email != "" {
		return errors.New("email already registered")
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(userRegister.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user = domain.User{
		ID:       uuid.New(),
		Username: userRegister.Username,
		Email:    userRegister.Email,
		Password: string(hashPassword),
		Experience: 0,
		Level: 1,
		Tier: domain.TIER1,
	}

	err = s.userRepo.CreateUser(ctx, user)
	if err != nil {
		return err
	}

	return nil
}

func (s *userService) Login(ctx context.Context, userLogin domain.UserLogin) (domain.UserLoginResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var user domain.User

	err := s.userRepo.FindUser(ctx, &user, domain.UserParam{Email: userLogin.Email})
	if err != nil {
		return domain.UserLoginResponse{}, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userLogin.Password))
	if err != nil {
		return domain.UserLoginResponse{}, errors.New("password not match")
	}

	token, err := s.jwt.GenerateToken(user.ID)
	if err != nil {
		return domain.UserLoginResponse{}, err
	}

	res := domain.UserLoginResponse{
		Token: token,
	}

	return res, nil
}
