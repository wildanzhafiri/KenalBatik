package rest

import (
	"kenalbatik-be/internal/domain"
	"kenalbatik-be/internal/infra/helper"
	"kenalbatik-be/internal/province/service"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func InitProvinceHandler(router *gin.Engine, provinceService service.ProvinceService) {
	provinceHandler := ProvinceHandler{
		provinceService: provinceService,
	}

	province := router.Group("api/v1/provinces")

	province.GET("", provinceHandler.GetAllProvince)
	province.GET("/:provinceId", provinceHandler.GetProvinceByID)
}

type ProvinceHandler struct {
	provinceService service.ProvinceService
}

// @Description Get All Province
// @Tags provinces
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response{data=domain.Province} "success get all province"
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/provinces [get]
func (h *ProvinceHandler) GetAllProvince(ctx *gin.Context) {
	var (
		err     error
		message string = "failed to get all province"
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

	res, err = h.provinceService.GetAllProvince(ctx.Request.Context())
	code = domain.GetCode(err)
	if err != nil {
		return
	}

	message = "success get all province"
}

// @Description Get Province By ID
// @Tags provinces
// @Accept json
// @Produce json
// @Param id path int true "Province ID"
// @Success 200 {object} helper.Response{data=domain.Province} "success get province by id"
// @Failure 400 {object} helper.ErrorResponse
// @Failure 404 {object} helper.ErrorResponse
// @Failure 408 {object} helper.ErrorResponse
// @Failure 500 {object} helper.ErrorResponse
// @Router /api/v1/provinces/{provinceId} [get]
func (h *ProvinceHandler) GetProvinceByID(ctx *gin.Context) {
	var (
		err     error
		message string = "failed to get province by id"
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

	idString := ctx.Param("provinceId")
	id, err := strconv.Atoi(idString)
	if err != nil {
		return
	}

	res, err = h.provinceService.GetProvinceByID(ctx.Request.Context(), id)
	code = domain.GetCode(err)

	if err != nil {
		return
	}

	message = "success get province by id"
}
