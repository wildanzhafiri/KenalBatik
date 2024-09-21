package domain

import "github.com/google/uuid"

type UserTier string

const (
	TIER1 UserTier = "TIER1"
	TIER2 UserTier = "TIER2"
	TIER3 UserTier = "TIER3"
	TIER4 UserTier = "TIER4"
	TIER5 UserTier = "TIER5"
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
	ID       uuid.UUID `json:"id"`
	Username string    `json:"username"`
	Email    string    `json:"email"`
}

type UserLogin struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserLoginResponse struct {
	Token string `json:"token"`
}

type OauthRedirectLink struct {
	RedirectLink string `json:"redirect_link"`
}

type UserOauth struct {
	Email       string `json:"email" gorm:"primary key"`
	Family_name string `json:"family_name"`
	Given_name  string `json:"given_name"`
	Id          string `json:"id"`
	Name        string `json:"name"`
	Picture     string `json:"picture"`
}
