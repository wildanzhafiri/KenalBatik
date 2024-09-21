package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type QuizRepository interface {
	GetQuiz(ctx context.Context, quiz []domain.Quiz, condition string, args []interface{}) (error)
}

type quizRepository struct {
	db *gorm.DB
}

func NewQuizRepository(db *gorm.DB) QuizRepository {
	return &quizRepository{db}
}

func (r *quizRepository) GetQuiz(ctx context.Context, quiz []domain.Quiz, condition string, args []interface{}) (error) {
	err := r.db.WithContext(ctx).Where(condition, args...).Order("RAND()").Limit(5).Find(&quiz).Error
	if err != nil {
		return err
	}

	return nil
}
