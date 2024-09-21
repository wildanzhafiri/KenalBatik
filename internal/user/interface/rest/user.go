package rest

import (
	"encoding/json"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/oauth"
	"kenalbatik-be/internal/user/service"

	"github.com/gin-gonic/gin"
	"golang.org/x/oauth2"
)

type UserHandler struct {
	userSvc service.UserService
	oauth   oauth.OauthInterface
}

func InitUserHandler(app *gin.Engine, userSvc service.UserService, oauth oauth.OauthInterface) {
	userHandler := UserHandler{
		userSvc: userSvc,
		oauth:   oauth,
	}

	user := app.Group("api/v1/users")

	user.POST("/register", userHandler.Register)
	user.POST("/login", userHandler.Login)
	user.GET("/oauth", userHandler.Oauth)
	user.GET("/oauth/callback", userHandler.OauthCallback)
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

func (h *UserHandler) Login(ctx *gin.Context) {
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
		"data":    res,
		"message": "success",
	})
}

func (h *UserHandler) Oauth(ctx *gin.Context) {
	url := h.oauth.GetConfig().AuthCodeURL("state", oauth2.AccessTypeOffline)

	resp := domain.OauthRedirectLink{
		RedirectLink: url,
	}

	ctx.JSON(200, gin.H{
		"data":    resp,
		"status":  "success",
		"message": "redirect to google login",
	})
}

func (h *UserHandler) OauthCallback(ctx *gin.Context) {
	resp, err := h.oauth.GetUserInfo(ctx)
	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	var user domain.UserOauth

	err = json.NewDecoder(resp.Body).Decode(&user)
	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	res, err := h.userSvc.Oauth(ctx.Request.Context(), user)
	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(200, gin.H{
		"data":    res,
		"message": "success",
	})
}
