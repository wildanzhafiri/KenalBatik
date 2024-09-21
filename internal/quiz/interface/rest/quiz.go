package rest

import (
	"kenalbatik-be/internal/middleware"
	"kenalbatik-be/internal/quiz/service"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type QuizHandler struct {
	quizService service.QuizService
	middleware middleware.Middleware
}

func InitQuizHandler(app *gin.Engine, quizSvc service.QuizService, middleware middleware.Middleware) {
	handler := QuizHandler{
		quizService: quizSvc,
		middleware: middleware,
	}

	quizGroup := app.Group("api/v1/quizzes")
	{
		quizGroup.GET("", middleware.Authentication , handler.GetQuizzes)
	}
}

func (h *QuizHandler) GetQuizzes(c *gin.Context) {
	//Get id from context
	idString := c.MustGet("id")
	id := uuid.MustParse(idString.(string))

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
