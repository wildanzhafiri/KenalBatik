package rest

import (
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/user/service"

	"github.com/gin-gonic/gin"
)

type UserHandler struct {
	userSvc service.UserService
}

func InitUserHandler(app *gin.Engine, userSvc service.UserService) {
	userHandler := UserHandler{
		userSvc: userSvc,
	}

	user := app.Group("api/v1/users")

	user.POST("/register", userHandler.Register)
	user.POST("/login", userHandler.Login)
}

func (h *UserHandler) Register(ctx *gin.Context) {
	var userRegister domain.UserRegister

	err := ctx.ShouldBindJSON(&userRegister)

	if userRegister.Password != userRegister.ConfirmPassword {
		ctx.JSON(400, gin.H{
			"message": "Password and confirm password must be the same",
		})
		return
	}

	if err != nil {
		ctx.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	err = h.userSvc.RegisterUser(ctx.Request.Context(), userRegister)
	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(200, gin.H{
		"message": "success",
	})
}

func (h *UserHandler) Login (ctx *gin.Context) {
	var userLogin domain.UserLogin

	err := ctx.ShouldBindJSON(&userLogin)

	if err != nil {
		ctx.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	res, err := h.userSvc.Login(ctx.Request.Context(), userLogin)
	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(200, gin.H{
		"data": res,
		"message": "success",
	})
}