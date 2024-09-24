package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	batikRepo "kenalbatik-be/internal/batik/repository"
	islandRepo "kenalbatik-be/internal/island/repository"
	provinceRepo "kenalbatik-be/internal/province/repository"
	"time"
)

type BatikService interface {
	GetAllBatik(ctx context.Context, batikParam domain.BatikParams, from string) ([]domain.BatikResponse, error)
	GetBatikByID(ctx context.Context, batikID int) (domain.BatikResponse, error)
}

type batikService struct{
	batikRepository batikRepo.BatikRepository
	islandRepository islandRepo.IslandRepository
	provinceRepository provinceRepo.ProvinceRepository
}

func NewBatikService(batikRepo batikRepo.BatikRepository) BatikService {
	return &batikService{
		batikRepository: batikRepo,
	}
}

func (s *batikService) GetAllBatik(ctx context.Context, batikParam domain.BatikParams, from string) ([]domain.BatikResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var batiks []domain.Batik

	err := s.batikRepository.FindAll(ctx, &batiks, batikParam)
	
	var batikResponses []domain.BatikResponse
	for _, batik := range batiks {
		batikResponse := domain.BatikResponse{
			ID: batik.ID,
			Name: batik.Name,
			Province: batik.Province.Name,
			Island: batik.Island.Name,
			Description: batik.Description,
			Link_Image: batik.Link_Image,
		}
		batikResponses = append(batikResponses, batikResponse)
	}

	select {
	case <-ctx.Done():
		return batikResponses, domain.ErrTimeout
	default:
		return batikResponses, err
	}
}

func (s *batikService) GetBatikByID(ctx context.Context, batikId int) (domain.BatikResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var batik domain.Batik
	err := s.batikRepository.FindByID(ctx, &batik, batikId)
	if err != nil {
		return domain.BatikResponse{}, err
	}

	batikResponse := domain.BatikResponse{
		ID: batik.ID,
		Name: batik.Name,
		Province: batik.Province.Name,
		Island: batik.Island.Name,
		Description: batik.Description,
		Link_Image: batik.Link_Image,
	}

	select {
	case <-ctx.Done():
		return batikResponse, domain.ErrTimeout
	default:
		return batikResponse, err
	}
}
