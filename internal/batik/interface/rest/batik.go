package rest

import (
	"kenalbatik-be/internal/batik/service"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/helper"
	"net/http"
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
	var (
		err error
		code int = http.StatusBadRequest
		message string = "failed to get all batik"
		res interface{}
		batikParam domain.BatikParams
	)

	sendResp := func ()  {
		helper.SendResponse(
			c, 
			code, 
			message, 
			res, 
			err,
		)
	}
	defer sendResp()

	from := c.Query("from")

	if from != "" {
		err := c.ShouldBindJSON(&batikParam)
		if err != nil {
			return
		}
	}

	res, err = b.batikService.GetAllBatik(c, batikParam, from)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get all batik"
}

func (h *BatikHandler) GetBatikByID(c *gin.Context) {
	var (
		err error
		code int = http.StatusBadRequest
		message string = "failed to get batik by id"
		res interface{}
	)

	sendResp := func ()  {
		helper.SendResponse(c, code, message, res, err)
	}

	defer sendResp()

	batikID := c.Param("batikId")
	batikIDInt, err := strconv.Atoi(batikID)
	if err != nil {
		return
	}

	res, err = h.batikService.GetBatikByID(c, batikIDInt)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get batik by id"
}
