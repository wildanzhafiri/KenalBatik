package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type IslandRepository interface {
	GetAllIsland(ctx context.Context, islands *[]domain.Island) error
	GetIslandByID(ctx context.Context, island *domain.Island, islandID int) error
}

type islandRepository struct {
	db *gorm.DB
}

func NewIslandRepository(db *gorm.DB) IslandRepository {
	return &islandRepository{db}
}

func (r *islandRepository) GetAllIsland(ctx context.Context, islands *[]domain.Island) error {
	err := r.db.Find(&islands).Error
	if err != nil {
		if len(*islands) == 0 {
			return domain.ErrRecordNotFound
		}

		return err
	}

	return nil
}

func (r *islandRepository) GetIslandByID(ctx context.Context, island *domain.Island, islandID int) error {
	err := r.db.First(&island, domain.IslandParams{ID: islandID}).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return domain.ErrRecordNotFound
		}

		return err
	}

	return nil
}
