package database

import "kenalbatik-be/internal/domain"

func Migrate() {
	err := DB.Migrator().AutoMigrate(
		&domain.Batik{},
		&domain.User{},
		&domain.Quiz{},
		&domain.Province{},
	)
	if err != nil {
		panic(err)
	}
}
