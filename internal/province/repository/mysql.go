package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type ProvinceRepository interface {
	GetAllProvince(ctx context.Context, provinces *[]domain.Province) (error)
	GetProvinceByID(ctx context.Context, province *domain.Province, provinceID int) error
}

type provinceRepository struct {
	db *gorm.DB
}

func NewProvinceRepository(db *gorm.DB) ProvinceRepository {
	return &provinceRepository{db}
}

func (r *provinceRepository) GetAllProvince(ctx context.Context, provinces *[]domain.Province) (error) {
	err := r.db.Find(&provinces).Error
	if err != nil {
		if len(*provinces) == 0 {
			return domain.ErrRecordNotFound
		}

		return err
	}

	return nil
}

func (r *provinceRepository) GetProvinceByID(ctx context.Context, province *domain.Province, provinceID int) error {
	err := r.db.First(&province, domain.ProvinceParams{ID: provinceID}).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return domain.ErrRecordNotFound
		}

		return err
	}

	return nil
}
