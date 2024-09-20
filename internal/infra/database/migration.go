package database

import "kenalbatik-be/internal/domain"

func Migrate() {
	DB.Migrator().AutoMigrate(&domain.Batik{}, &domain.User{})
}
