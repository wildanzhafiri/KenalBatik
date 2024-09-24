package rest

import (
	"kenalbatik-be/internal/island/service"
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/helper"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type IslandHandler struct{
	islandService service.IslandService
}

func InitIslandHandler(router *gin.Engine, islandService service.IslandService) {
	islandHandler := IslandHandler{
		islandService: islandService,
	}

	island := router.Group("api/v1/islands")
	island.GET("", islandHandler.GetIslands)
	island.GET("/:islandId", islandHandler.GetIslandByID)
}

// @Description Get All Island
// @Tags islands
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response{data=domain.Island} "success get all island"
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/islands [get]
func (h *IslandHandler) GetIslands(ctx *gin.Context) {
	var (
		err     error
		message string = "failed to get all island"
		code    int    = http.StatusBadRequest
		res     interface{}
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

	res, err = h.islandService.GetAllIsland(ctx.Request.Context())
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get all island"
}

// @Description Get Island By ID
// @Tags islands
// @Accept json
// @Produce json
// @Param islandId path int true "Island ID"
// @Success 200 {object} helper.Response{data=domain.Island} "success get island by id"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/islands/{islandId} [get]
func (h *IslandHandler) GetIslandByID(ctx *gin.Context) {
	var (
		err     error
		message string = "failed to get island by id"
		code    int    = http.StatusBadRequest
		res     interface{}
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

	idString := ctx.Param("islandId")
	id, err := strconv.Atoi(idString)
	if err != nil {
		return
	}

	res, err = h.islandService.GetIslandByID(ctx.Request.Context(), id)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get island by id"
}
