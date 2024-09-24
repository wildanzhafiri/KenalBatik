package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type BatikRepository interface {
	FindAll(ctx context.Context, batiks *[]domain.Batik, batikParam domain.BatikParams) error
	FindByID(ctx context.Context, batik *domain.Batik, batikID int) error
}

type batikRepository struct {
	db *gorm.DB
}

func NewBatikRepository(db *gorm.DB) BatikRepository {
	return &batikRepository{db}
}

func (r *batikRepository) FindAll(ctx context.Context, batiks *[]domain.Batik, batikParam domain.BatikParams) error {
	err := r.db.WithContext(ctx).Preload("Province").Preload("Island").Find(&batiks, batikParam).Error
	if err != nil {
		if len(*batiks) == 0 {
			return domain.ErrRecordNotFound
		}
		return err
	}

	return nil
}

func (r *batikRepository) FindByID(ctx context.Context, batik *domain.Batik, batikID int) error {
	err := r.db.WithContext(ctx).Preload("Province").Preload("Island").First(&batik, domain.BatikParams{ID: batikID}).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return domain.ErrRecordNotFound
		}
		return err
	}

	return nil
}
