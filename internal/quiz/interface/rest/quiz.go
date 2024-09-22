package rest

import (
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/helper"
	"kenalbatik-be/internal/middleware"
	"kenalbatik-be/internal/quiz/service"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type QuizHandler struct {
	quizService service.QuizService
	middleware  middleware.Middleware
}

func InitQuizHandler(app *gin.Engine, quizSvc service.QuizService, middleware middleware.Middleware) {
	handler := QuizHandler{
		quizService: quizSvc,
		middleware:  middleware,
	}

	quizGroup := app.Group("api/v1/quizzes")
	{
		quizGroup.GET("", middleware.Authentication, handler.GetQuizzes)
		quizGroup.POST("/check", middleware.Authentication, handler.CheckAnswer)
	}
}

func (h *QuizHandler) GetQuizzes(ctx *gin.Context) {
	var(
		err error
		code int = http.StatusBadRequest
		message string = "failed to get quizzes"
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

	idString := ctx.GetString("id")

	id, err := uuid.Parse(idString)
	if err != nil {
		return
	}

	res, err = h.quizService.GetQuizzes(ctx.Request.Context(), id)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success to get quizzes"
}

func (h *QuizHandler) CheckAnswer(ctx *gin.Context) {
	var (
		err error
		message string = "failed to check answer"
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

	idString := ctx.GetString("id")
	id, err := uuid.Parse(idString)
	if err != nil {
		return
	}

	var userAnswer domain.AnswerRequest

	err = ctx.ShouldBindJSON(&userAnswer)
	if err != nil {
		return
	}

	res, err = h.quizService.CheckAnswer(ctx.Request.Context(), id, userAnswer)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success check answer"
}
