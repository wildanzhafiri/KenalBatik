package env

import (
	"github.com/spf13/viper"
)

type Env struct {
	DB_HOST     string `mapstructure:"DB_HOST"`
	DB_PORT     string `mapstructure:"DB_PORT"`
	DB_USER     string `mapstructure:"DB_USER"`
	DB_PASSWORD string `mapstructure:"DB_PASSWORD"`
	DB_NAME     string `mapstructure:"DB_NAME"`
	APP_PORT    string `mapstructure:"APP_PORT"`
	JWT_SECRET  string `mapstructure:"JWT_SECRET"`
	JWT_EXPIRED string `mapstructure:"JWT_EXPIRED"`
}

var AppEnv = getEnv()

func getEnv() *Env {
	env := &Env{}

	viper.SetConfigFile(".env")
	if err := viper.ReadInConfig(); err != nil {
		panic(err)
	}

	if err := viper.Unmarshal(env); err != nil {
		panic(err)
	}

	return env
}