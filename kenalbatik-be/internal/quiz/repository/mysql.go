package repository

import (
	"context"
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

type QuizRepository interface {
	GetQuiz(ctx context.Context, quiz *[]domain.Quiz, condition string, args []interface{}) (error)
	GetQuizByID(ctx context.Context, quiz *domain.Quiz, quizID int) error 
}

type quizRepository struct {
	db *gorm.DB
}

func NewQuizRepository(db *gorm.DB) QuizRepository {
	return &quizRepository{db}
}

func (r *quizRepository) GetQuiz(ctx context.Context, quiz *[]domain.Quiz, condition string, args []interface{}) (error) {
	err := r.db.Debug().WithContext(ctx).Where(condition, args...).Order("RAND()").Limit(5).Find(&quiz).Error
	if err != nil {
		if len(*quiz) < 5 {
			return err
		}
		return err
	}

	return nil
}

func (r *quizRepository) GetQuizByID(ctx context.Context, quiz *domain.Quiz, quizID int) error {
	err := r.db.WithContext(ctx).First(&quiz, domain.QuizParams{ID: quizID}).Error
	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return domain.ErrRecordNotFound
		}
		return err
	}

	return nil
}
