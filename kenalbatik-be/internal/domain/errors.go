package domain

import (
	"errors"
	"net/http"
)

var (
	ErrInvalidEmailOrPassword = errors.New("invalid email or password")
	ErrRecordNotFound         = errors.New("record not found")
	ErrTimeout                = errors.New("request timeout")
	ErrEmailAlreadyExist      = errors.New("email already exist")
	ErrPasswordNotMatch       = errors.New("password not match")
	ErrTokenExpired           = errors.New("token expired")
)

func GetCode(err error) int {
	if err == nil {
		return http.StatusOK
	}

	switch err {
	case ErrInvalidEmailOrPassword,
		ErrTokenExpired,
		ErrPasswordNotMatch:
		return http.StatusBadRequest
	case ErrEmailAlreadyExist:
		return http.StatusConflict
	case ErrRecordNotFound:
		return http.StatusNotFound
	case ErrTimeout:
		return http.StatusRequestTimeout
	default:
		return http.StatusInternalServerError
	}
}
