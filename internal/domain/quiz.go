package domain

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
