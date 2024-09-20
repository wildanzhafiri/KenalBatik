package service

import (
	"context"
	"errors"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/user/repository"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserService interface {
	RegisterUser(ctx context.Context, userRegister domain.UserRegister) error
}

type userService struct {
	userRepo repository.Userepository
}

func NewUserService(userRepo repository.Userepository) UserService {
	return &userService{
		userRepo: userRepo,
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
