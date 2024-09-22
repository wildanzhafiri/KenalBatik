package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/batik/repository"
	"time"
)

type BatikService interface {
	GetAllBatik(ctx context.Context, batikParam domain.BatikParams, from string) ([]domain.Batik, error)
	GetBatikByID(ctx context.Context, batikID int) (domain.Batik, error)
}

type batikService struct{
	batikRepository repository.BatikRepository
}

func NewBatikService(batikRepo repository.BatikRepository) BatikService {
	return &batikService{
		batikRepository: batikRepo,
	}
}

func (s *batikService) GetAllBatik(ctx context.Context, batikParam domain.BatikParams, from string) ([]domain.Batik, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var batiks []domain.Batik

	err := s.batikRepository.FindAll(ctx, &batiks, batikParam)
	
	select {
	case <-ctx.Done():
		return batiks, domain.ErrTimeout
	default:
		return batiks, err
	}
}

func (s *batikService) GetBatikByID(ctx context.Context, batikId int) (domain.Batik, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var batik domain.Batik
	err := s.batikRepository.FindByID(ctx, &batik, batikId)
	if err != nil {
		return domain.Batik{}, err
	}

	select {
	case <-ctx.Done():
		return batik, domain.ErrTimeout
	default:
		return batik, err
	}
}
