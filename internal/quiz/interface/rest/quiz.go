package rest

import (
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/middleware"
	"kenalbatik-be/internal/quiz/service"

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

func (h *QuizHandler) GetQuizzes(c *gin.Context) {
	idString := c.GetString("id")

	id, err := uuid.Parse(idString)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	res, err := h.quizService.GetQuizzes(c.Request.Context(), id)
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "success",
		"data":    res,
	})
}

func (h *QuizHandler) CheckAnswer(c *gin.Context) {
	idString := c.GetString("id")
	id, err := uuid.Parse(idString)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	var userAnswer domain.AnswerRequest

	err = c.ShouldBindJSON(&userAnswer)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	res, err := h.quizService.CheckAnswer(c.Request.Context(), id, userAnswer)
	if err != nil {
		c.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "success",
		"data":    res,
	})
}
