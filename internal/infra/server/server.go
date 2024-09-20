package server

import (
	batikRest "kenalbatik-be/internal/batik/interface/rest"
	batikRepo "kenalbatik-be/internal/batik/repository"
	batikSvc "kenalbatik-be/internal/batik/service"
	userRest "kenalbatik-be/internal/user/interface/rest"
	userRepo "kenalbatik-be/internal/user/repository"
	userSvc "kenalbatik-be/internal/user/service"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Server interface {
	Run(port string)
	MountRoutes(db *gorm.DB)
}

type server struct {
	app *gin.Engine
}

func NewServer() Server {
	return &server{
		app: gin.Default(),
	}
}

func (s *server) Run(port string) {
	err := s.app.Run(":" + port)
	if err != nil {
		panic(err)
	}
}

func (s *server) MountRoutes(db *gorm.DB) {
	batikRepo := batikRepo.NewBatikRepository(db)
	userRepo := userRepo.NewUserepository(db)

	batikService := batikSvc.NewBatikService(batikRepo)
	userService := userSvc.NewUserService(userRepo)

	batikRest.InitBatikHandler(s.app, batikService)
	userRest.InitUserHandler(s.app, userService)
}