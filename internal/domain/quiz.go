package domain

import "github.com/google/uuid"

type Difficulty string

const (
	EASY   Difficulty = "easy"
	MEDIUM Difficulty = "medium"
	HARD   Difficulty = "hard"
)

type Quiz struct {
	ID         int        `json:"id"`
	Question   string     `json:"question"`
	Answer     string     `json:"answer"`
	OptionA    string     `json:"option_a"`
	OptionB    string     `json:"option_b"`
	OptionC    string     `json:"option_c"`
	OptionD    string     `json:"option_d"`
	Difficulty Difficulty `json:"difficulty"`
	Image_Link string     `json:"image_link"`
}

type AnswerRequest struct {
	QuizID     []int     `json:"quiz_id"`
	UserId     uuid.UUID `json:"user_id"`
	UserAnswer []string  `json:"user_answer"`
}

type AnswerResponse struct {
	CorrectAnswer  int      `json:"correct_answer"`
	UserLevel      int      `json:"user_level"`
	UserExperience int      `json:"user_experience"`
	UserTier       UserTier `json:"user_tier"`
}

type QuizParams struct {
	ID         int        `json:"id"`
}
