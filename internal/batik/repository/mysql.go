package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type BatikRepository interface {
	FindAll(ctx context.Context, batiks *[]domain.Batik, batikParam domain.BatikParams) error
}

type batikRepository struct {
	db *gorm.DB
}

func NewBatikRepository(db *gorm.DB) BatikRepository {
	return &batikRepository{db}
}

func (r *batikRepository) FindAll(ctx context.Context, batiks *[]domain.Batik, batikParam domain.BatikParams) error {
	err := r.db.WithContext(ctx).Find(&batiks, batikParam).Error
	if err != nil {
		return err
	}

	return nil
}
