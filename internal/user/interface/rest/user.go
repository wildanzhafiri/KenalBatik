package rest

import (
	"encoding/json"
	"fmt"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/helper"
	"kenalbatik-be/internal/infra/oauth"
	"kenalbatik-be/internal/user/service"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
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
	user.POST("/forgot-password", userHandler.ForgotPassword)
	user.POST("/reset-password/:resetPasswordToken", userHandler.ResetPassword)
	user.GET("/:userId", userHandler.GetUserByID)
}

// @Description Register User
// @Tags users
// @Accept json
// @Produce json
// @Param user body domain.UserRegister true "User Register"
// @Success 200 {object} helper.Response{data=domain.User} "success register user"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/users/register [post]
func (h *UserHandler) Register(ctx *gin.Context) {
	var (
		userRegister domain.UserRegister
		err error
		message string = "failed to register user"
		code int = http.StatusBadRequest
		res interface{}
	)

	sendResp := func() {
		helper.SendResponse(
			ctx,
			code,
			message,
			res,
			err,
		)
	}
	defer sendResp()

	err = ctx.ShouldBindJSON(&userRegister)

	if userRegister.Password != userRegister.ConfirmPassword {
		err = domain.ErrPasswordNotMatch
		return
	}

	if err != nil {
		return
	}

	err = h.userSvc.RegisterUser(ctx.Request.Context(), userRegister)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success register user"
}

// @Description Login User
// @Tags users
// @Accept json
// @Produce json
// @Param user body domain.UserLogin true "User Login"
// @Success 200 {object} helper.Response{data=domain.User} "success login user"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/users/login [post]
func (h *UserHandler) Login(ctx *gin.Context) {
	var (
		userLogin domain.UserLogin
		err error
		message string = "failed to login"
		code int = http.StatusBadRequest
		res interface{}
	)

	sendResp := func() {
		helper.SendResponse(
			ctx,
			code,
			message,
			res,
			err,
		)
	}
	defer sendResp()

	err = ctx.ShouldBindJSON(&userLogin)

	if err != nil {
		return
	}

	res, err = h.userSvc.Login(ctx.Request.Context(), userLogin)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success to login user"
}

// @Description Oauth Login
// @Tags users
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response{data=domain.OauthRedirectLink} "success get oauth redirect link"
// @Router /api/v1/users/oauth [get]
func (h *UserHandler) Oauth(ctx *gin.Context) {
	url := h.oauth.GetConfig().AuthCodeURL("state", oauth2.AccessTypeOffline)

	resp := domain.OauthRedirectLink{
		RedirectLink: url,
	}

	helper.SendSuccessResponse(
		ctx,
		http.StatusOK,
		"please redirect to this URL",
		resp,
	)
}

// @Description Oauth Callback
// @Tags users
// @Accept json
// @Produce json
// @Success 301 {string} redirectURL "Redirects to frontend URL with code, message, and token if login is successful"
// @Failure 301 {string} redirectURL "Redirects to frontend URL with code and error message if login fails"
// @Router /api/v1/users/oauth/callback [get]
func (h *UserHandler) OauthCallback(ctx *gin.Context) {
	var(
		err error
		code int = http.StatusInternalServerError
		message string = "failed to login"
		res interface{}
	)

	sendResp := func() {
		if err != nil {
		ctx.Redirect(301, fmt.Sprintf("localhost:3000/oauth/login/redirect?code=%v&message=%v", code, message))
		} else {
			ctx.Redirect(301, fmt.Sprintf("localhost:3000/oauth/login/redirect?code=%v&message=%v&token=%v", code, message, res))
		}
	}
	defer sendResp()

	resp, err := h.oauth.GetUserInfo(ctx)
	if err != nil {
		return
	}

	var user domain.UserOauth

	err = json.NewDecoder(resp.Body).Decode(&user)
	if err != nil {
		return
	}

	res, err = h.userSvc.Oauth(ctx.Request.Context(), user)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success to register/login user with oauth"
}

// @Description Forgot Password
// @Tags users
// @Accept json
// @Produce json
// @Param user body domain.UserForgotPassword true "User Forgot Password"
// @Success 200 {object} helper.Response "success forgot password"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/users/forgot-password [post]
func (h *UserHandler) ForgotPassword(ctx *gin.Context) {
	var (
		userForgotPassword domain.UserForgotPassword
		err error
		message string = "failed to forgot password"
		code int = http.StatusBadRequest
		res interface{}
	)

	sendResp := func() {
		helper.SendResponse(
			ctx,
			code,
			message,
			res,
			err,
		)
	}
	defer sendResp()

	err = ctx.ShouldBindJSON(&userForgotPassword)

	if err != nil {
		return
	}

	referer := ctx.Request.Referer()

	err = h.userSvc.ForgotPassword(ctx.Request.Context(), userForgotPassword, referer)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "please check your email to reset your password"
}

// @Description Reset Password
// @Tags users
// @Accept json
// @Produce json
// @Param resetPasswordToken path string true "Reset Password Token"
// @Param user body domain.ResetPassword true "Reset Password"
// @Success 200 {object} helper.Response "success reset password"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/users/reset-password/{resetPasswordToken} [post]
func (h *UserHandler) ResetPassword(ctx *gin.Context) {
	var (
		userResetPassword domain.ResetPassword
		err error
		message string = "failed to reset password"
		code int = http.StatusBadRequest
		res interface{}
	)

	sendResp := func() {
		helper.SendResponse(
			ctx,
			code,
			message,
			res,
			err,
		)
	}
	defer sendResp()

	err = ctx.ShouldBindJSON(&userResetPassword)

	if userResetPassword.Password != userResetPassword.ConfirmPassword {
		err = domain.ErrPasswordNotMatch
		return
	}

	if err != nil {
		return
	}

	resetPasswordToken := ctx.Param("resetPasswordToken")

	err = h.userSvc.ResetPassword(ctx.Request.Context(), userResetPassword, resetPasswordToken)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success reset password"
}

// @Description Get User By ID
// @Tags users
// @Accept json
// @Produce json
// @Param userId path string true "User ID"
// @Success 200 {object} helper.Response{data=domain.User} "success get user by id"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Security Bearer
// @Router /api/v1/users/{userId} [get]
func (h *UserHandler) GetUserByID(ctx *gin.Context) {
	var (
		err error
		code int = http.StatusBadRequest
		message string = "failed to get user by id"
		res interface{}
	)

	sendResp := func() {
		helper.SendResponse(
			ctx,
			code,
			message,
			res,
			err,
		)
	}
	defer sendResp()

	userIdString := ctx.Param("userId")
	userId, err := uuid.Parse(userIdString)
	if err != nil {
		return
	}

	res, err = h.userSvc.GetUserByID(ctx.Request.Context(), userId)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get user by id"
}
