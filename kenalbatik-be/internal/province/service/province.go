package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/province/repository"
	"time"
)

type ProvinceService interface{
	GetAllProvince(ctx context.Context) ([]domain.Province, error)
	GetProvinceByID(ctx context.Context, provinceID int) (domain.Province, error)
}

type provinceService struct{
	provinceRepo repository.ProvinceRepository
}

func NewProvinceService(provinceRepo repository.ProvinceRepository) ProvinceService {
	return &provinceService{
		provinceRepo: provinceRepo,
	}
}

func (s *provinceService) GetAllProvince(ctx context.Context) ([]domain.Province, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Second*5)
	defer cancel()

	var provinces []domain.Province
	err := s.provinceRepo.GetAllProvince(ctx, &provinces)

	select{
	case <-ctx.Done():
		return nil, domain.ErrTimeout
	default:
		return provinces, err
	}
}

func (s *provinceService) GetProvinceByID(ctx context.Context, provinceID int) (domain.Province, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Second*5)
	defer cancel()

	var province domain.Province
	err := s.provinceRepo.GetProvinceByID(ctx, &province, provinceID)

	select{
	case <-ctx.Done():
		return domain.Province{}, domain.ErrTimeout
	default:
		return province, err
	}
}
