package main

import (
	"kenalbatik-be/internal/infra/database"
	"kenalbatik-be/internal/infra/env"
	"kenalbatik-be/internal/infra/server"
)

func main() {
	database.ConnectToDB()
	database.Migrate()
	database.SeedData(database.DB)
	
	server := server.NewServer()
	server.MountRoutes(database.DB)
	server.MountSwagger()
	server.Run(env.AppEnv.APP_PORT)
}