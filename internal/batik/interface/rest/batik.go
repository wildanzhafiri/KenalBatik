package rest

import (
	"kenalbatik-be/internal/batik/service"
	"kenalbatik-be/internal/domain"
	"strconv"

	"github.com/gin-gonic/gin"
)

type BatikHandler struct {
	batikService service.BatikService
}

func InitBatikHandler(router *gin.Engine, batikService service.BatikService) {
	batikHandler := BatikHandler{
		batikService: batikService,
	}

	batik := router.Group("api/v1/batik")

	batik.GET("", batikHandler.GetAllBatik)
	batik.GET("/:batikId", batikHandler.GetBatikByID)
}

func (b *BatikHandler) GetAllBatik(c *gin.Context) {
	from := c.Query("from")

	var batikParam domain.BatikParams

	if from != "" {
		err := c.ShouldBindJSON(&batikParam)
		if err != nil {
			c.JSON(400, gin.H{
				"message": err.Error(),
			})
			return
		}
	}

	res, err := b.batikService.GetAllBatik(c, batikParam, from)
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

func (h *BatikHandler) GetBatikByID(c *gin.Context) {
	batikID := c.Param("batikId")
	batikIDInt, err := strconv.Atoi(batikID)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	res, err := h.batikService.GetBatikByID(c, batikIDInt)
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
