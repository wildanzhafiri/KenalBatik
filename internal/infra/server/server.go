package server

import (
	batikRest "kenalbatik-be/internal/batik/interface/rest"
	batikRepo "kenalbatik-be/internal/batik/repository"
	batikSvc "kenalbatik-be/internal/batik/service"
	"kenalbatik-be/internal/infra/jwt"
	"kenalbatik-be/internal/infra/oauth"
	"kenalbatik-be/internal/middleware"
	quizRest "kenalbatik-be/internal/quiz/interface/rest"
	quizRepo "kenalbatik-be/internal/quiz/repository"
	quizSvc "kenalbatik-be/internal/quiz/service"
	userRest "kenalbatik-be/internal/user/interface/rest"
	userRepo "kenalbatik-be/internal/user/repository"
	userSvc "kenalbatik-be/internal/user/service"
	provinceRest "kenalbatik-be/internal/province/interface/rest"
	provinceRepo "kenalbatik-be/internal/province/repository"
	provinceSvc "kenalbatik-be/internal/province/service"
	islandRest "kenalbatik-be/internal/island/interface/rest"
	islandRepo "kenalbatik-be/internal/island/repository"
	islandSvc "kenalbatik-be/internal/island/service"

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
	jwt := jwt.NewJWT()
	oauth := oauth.Oauth
	middleware := middleware.NewMiddleware(jwt)

	batikRepo := batikRepo.NewBatikRepository(db)
	userRepo := userRepo.NewUserepository(db)
	quizRepo := quizRepo.NewQuizRepository(db)
	provinceRepo := provinceRepo.NewProvinceRepository(db)
	islandRepo := islandRepo.NewIslandRepository(db)

	batikService := batikSvc.NewBatikService(batikRepo)
	userService := userSvc.NewUserService(userRepo, *jwt)
	quizService := quizSvc.NewQuizService(userRepo, quizRepo)
	provinceService := provinceSvc.NewProvinceService(provinceRepo)
	islandService := islandSvc.NewIslandService(islandRepo)

	batikRest.InitBatikHandler(s.app, batikService)
	userRest.InitUserHandler(s.app, userService, oauth)
	quizRest.InitQuizHandler(s.app, quizService, *middleware)
	provinceRest.InitProvinceHandler(s.app, provinceService)
	islandRest.InitIslandHandler(s.app, islandService)
}