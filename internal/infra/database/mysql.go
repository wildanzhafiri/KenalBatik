package database

import (
	"fmt"
	"kenalbatik-be/internal/infra/env"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() {
	open := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", env.AppEnv.DB_USER, env.AppEnv.DB_PASSWORD, env.AppEnv.DB_HOST, env.AppEnv.DB_PORT, env.AppEnv.DB_NAME)

	db, err  := gorm.Open(mysql.Open(open), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	DB = db
}