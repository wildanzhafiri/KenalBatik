package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type Userepository interface {
	FindUser(ctx context.Context, user *domain.User, userParam domain.UserParam) error
	CreateUser(ctx context.Context, user domain.User) error
}

type userepository struct {
	db *gorm.DB
}

func NewUserepository(db *gorm.DB) Userepository {
	return &userepository{db}
}

func (r *userepository) FindUser(ctx context.Context, user *domain.User, userParam domain.UserParam) error {
	err := r.db.WithContext(ctx).First(&user, userParam).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return err
		}
		return err
	}

	return nil
}

func (r *userepository) CreateUser(ctx context.Context, user domain.User) error {
	err := r.db.WithContext(ctx).Create(&user).Error
	if err != nil {
		return err
	}

	return nil
}
