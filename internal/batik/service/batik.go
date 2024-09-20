package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/batik/repository"
	"time"
)

type BatikService interface {
	GetAllBatik(ctx context.Context, batikParam domain.BatikParams, from string) ([]domain.Batik, error)
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
	if err != nil {
		return nil, err
	}

	return batiks, nil
}
