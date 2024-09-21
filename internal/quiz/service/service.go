package service

import (
	"context"
	"kenalbatik-be/internal/domain"
	quizRepo "kenalbatik-be/internal/quiz/repository"
	userRepo "kenalbatik-be/internal/user/repository"
	"time"

	"github.com/google/uuid"
)

type QuizService interface {
	GetQuizzes(ctx context.Context, userId uuid.UUID) ([]domain.Quiz, error)
}

type quizService struct {
	userRepo userRepo.Userepository
	quizRepo quizRepo.QuizRepository
}

func NewQuizService(userRepo userRepo.Userepository, quizRepo quizRepo.QuizRepository) QuizService {
	return &quizService{
		userRepo: userRepo,
		quizRepo: quizRepo,
	}
}

func (s *quizService) GetQuizzes(ctx context.Context, userId uuid.UUID) ([]domain.Quiz, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	var user domain.User
	err := s.userRepo.FindUser(ctx, &user, domain.UserParam{ID: userId})
	if err != nil {
		return nil, err
	}

	var quizzes []domain.Quiz

	switch user.Tier {
	case domain.TIER1:
		//where difficulty = easy
		err = s.quizRepo.GetQuiz(ctx, quizzes, "DIFFICULTY = ?", []interface{}{domain.EASY})
	case domain.TIER2:
		//where difficulty = easy or medium
		err = s.quizRepo.GetQuiz(ctx, quizzes, "DIFFICULTY = ? OR DIFFICULTY = ?", []interface{}{domain.EASY, domain.MEDIUM})
	case domain.TIER3:
		//where difficulty = medium
		err = s.quizRepo.GetQuiz(ctx, quizzes, "DIFFICULTY = ?", []interface{}{domain.MEDIUM})
	case domain.TIER4:
		//where difficulty = medium or hard
		err = s.quizRepo.GetQuiz(ctx, quizzes, "DIFFICULTY = ? OR DIFFICULTY = ?", []interface{}{domain.MEDIUM, domain.HARD})
	case domain.TIER5:
		//where difficulty = hard
		err = s.quizRepo.GetQuiz(ctx, quizzes, "DIFFICULTY = ?", []interface{}{domain.HARD})
	}
	if err != nil {
		return nil, err
	}

	return quizzes, nil
}
