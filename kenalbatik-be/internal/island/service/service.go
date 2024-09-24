package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/island/repository"
	"time"
)

type IslandService interface {
	GetAllIsland(ctx context.Context) ([]domain.Island, error)
	GetIslandByID(ctx context.Context, islandID int) (domain.Island, error)
}

type islandService struct {
	islandRepo repository.IslandRepository
}

func NewIslandService(islandRepo repository.IslandRepository) IslandService {
	return &islandService{
		islandRepo: islandRepo,
	}
}

func (s *islandService) GetAllIsland(ctx context.Context) ([]domain.Island, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Second*5)
	defer cancel()

	var islands []domain.Island
	err := s.islandRepo.GetAllIsland(ctx, &islands)
	

	select {
	case <-ctx.Done():
		return nil, domain.ErrTimeout
	default:
		return islands, err
	}
}

func (s *islandService) GetIslandByID(ctx context.Context, islandID int) (domain.Island, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Second*5)
	defer cancel()

	var island domain.Island
	err := s.islandRepo.GetIslandByID(ctx, &island, islandID)
	

	select {
	case <-ctx.Done():
		return domain.Island{}, domain.ErrTimeout
	default:
		return island, err
	}
}
