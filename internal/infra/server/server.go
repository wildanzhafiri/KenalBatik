package server

import (
	"kenalbatik-be/docs"
	islandSvc "kenalbatik-be/internal/Island/service"
	batikRest "kenalbatik-be/internal/batik/interface/rest"
	batikRepo "kenalbatik-be/internal/batik/repository"
	batikSvc "kenalbatik-be/internal/batik/service"
	"kenalbatik-be/internal/infra/gomail"
	"kenalbatik-be/internal/infra/jwt"
	"kenalbatik-be/internal/infra/oauth"
	islandRest "kenalbatik-be/internal/island/interface/rest"
	islandRepo "kenalbatik-be/internal/island/repository"
	"kenalbatik-be/internal/middleware"
	provinceRest "kenalbatik-be/internal/province/interface/rest"
	provinceRepo "kenalbatik-be/internal/province/repository"
	provinceSvc "kenalbatik-be/internal/province/service"
	quizRest "kenalbatik-be/internal/quiz/interface/rest"
	quizRepo "kenalbatik-be/internal/quiz/repository"
	quizSvc "kenalbatik-be/internal/quiz/service"
	userRest "kenalbatik-be/internal/user/interface/rest"
	userRepo "kenalbatik-be/internal/user/repository"
	userSvc "kenalbatik-be/internal/user/service"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"gorm.io/gorm"
)

type Server interface {
	Run(port string)
	MountRoutes(db *gorm.DB)
	MountSwagger()
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

func (s *server) MountSwagger() {
	docs.SwaggerInfo.BasePath = "api/v1"
	s.app.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
}

func (s *server) MountRoutes(db *gorm.DB) {
	jwt := jwt.NewJWT()
	oauth := oauth.Oauth
	middleware := middleware.NewMiddleware(jwt)
	gomail := gomail.GoMail

	batikRepo := batikRepo.NewBatikRepository(db)
	userRepo := userRepo.NewUserepository(db)
	quizRepo := quizRepo.NewQuizRepository(db)
	provinceRepo := provinceRepo.NewProvinceRepository(db)
	islandRepo := islandRepo.NewIslandRepository(db)

	batikService := batikSvc.NewBatikService(batikRepo)
	userService := userSvc.NewUserService(userRepo, *jwt, gomail)
	quizService := quizSvc.NewQuizService(userRepo, quizRepo)
	provinceService := provinceSvc.NewProvinceService(provinceRepo)
	islandService := islandSvc.NewIslandService(islandRepo)

	batikRest.InitBatikHandler(s.app, batikService)
	userRest.InitUserHandler(s.app, userService, oauth)
	quizRest.InitQuizHandler(s.app, quizService, *middleware)
	provinceRest.InitProvinceHandler(s.app, provinceService)
	islandRest.InitIslandHandler(s.app, islandService)
}
