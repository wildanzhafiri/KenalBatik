package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/jwt"
	"kenalbatik-be/internal/user/repository"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	RegisterUser(ctx context.Context, userRegister domain.UserRegister) error
	Login(ctx context.Context, userLogin domain.UserLogin) (domain.UserLoginResponse, error)
	Oauth(ctx context.Context, user domain.UserOauth) (string, error)
}

type userService struct {
	userRepo repository.Userepository
	jwt      jwt.JWT
}

func NewUserService(userRepo repository.Userepository, jwt jwt.JWT) UserService {
	return &userService{
		userRepo: userRepo,
		jwt:      jwt,
	}
}

func (s *userService) RegisterUser(ctx context.Context, userRegister domain.UserRegister) error {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var user domain.User

	err := s.userRepo.FindUser(ctx, &user, domain.UserParam{Email: userRegister.Email})
	if err != nil {
		if err != domain.ErrRecordNotFound {
			return err
		}
	}

	if user.Email != "" {
		return domain.ErrEmailAlreadyExist
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(userRegister.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user = domain.User{
		ID:         uuid.New(),
		Username:   userRegister.Username,
		Email:      userRegister.Email,
		Password:   string(hashPassword),
		Experience: 0,
		Level:      1,
		Tier:       domain.TIER1,
	}

	err = s.userRepo.CreateUser(ctx, user)
	
	select {
	case <-ctx.Done():
		return domain.ErrTimeout
	default:
		return err
	}
}

func (s *userService) Login(ctx context.Context, userLogin domain.UserLogin) (domain.UserLoginResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var user domain.User

	err := s.userRepo.FindUser(ctx, &user, domain.UserParam{Email: userLogin.Email})
	if err != nil {
		if err == domain.ErrRecordNotFound {
			return domain.UserLoginResponse{}, domain.ErrInvalidEmailOrPassword
		}

		return domain.UserLoginResponse{}, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userLogin.Password))
	if err != nil {
		return domain.UserLoginResponse{}, domain.ErrInvalidEmailOrPassword
	}

	token, err := s.jwt.GenerateToken(user.ID)

	res := domain.UserLoginResponse{
		Token: token,
	}

	select {
	case <-ctx.Done():
		return domain.UserLoginResponse{}, domain.ErrTimeout
	default:
		return res, err
	}
}

func (s *userService) Oauth(ctx context.Context, user domain.UserOauth) (string, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var userDomain domain.User

	err := s.userRepo.FindUser(ctx, &userDomain, domain.UserParam{Email: user.Email})
	if err != nil {
		if err != domain.ErrRecordNotFound {
			return "", err
		}

		newUser := domain.User{
			ID:         uuid.New(),
			Username:   user.Name,
			Email:      user.Email,
			Experience: 0,
			Level:      1,
			Tier:       domain.TIER1,
		}

		err = s.userRepo.CreateUser(ctx, newUser)
		if err != nil {
			return "", err
		}
	}

	token, err := s.jwt.GenerateToken(userDomain.ID)


	select {
	case <-ctx.Done():
		return "", domain.ErrTimeout
	default:
		return token, err
	}
}
