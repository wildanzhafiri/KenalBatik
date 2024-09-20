package domain

import "github.com/google/uuid"

type UserTier string

const (
	TIER1 UserTier = "TIER1"
	TIER2 UserTier = "TIER2"
	TIER3 UserTier = "TIER3"
)

type User struct {
	ID         uuid.UUID `json:"id"`
	Username   string    `json:"username"`
	Email      string    `json:"email" gorm:"uniqueIndex"`
	Password   string    `json:"password"`
	Experience int       `json:"experience"`
	Level      int       `json:"level"`
	Tier       UserTier  `json:"tier" gorm:"type:ENUM('TIER1', 'TIER2', 'TIER3')"`
}

type UserRegister struct {
	Username        string `json:"username" binding:"required"`
	Email           string `json:"email" binding:"required"`
	Password        string `json:"password" binding:"required"`
	ConfirmPassword string `json:"confirm_password" binding:"required"`
}
type UserParam struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}