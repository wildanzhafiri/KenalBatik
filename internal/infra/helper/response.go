package helper

import "github.com/gin-gonic/gin"

type Status string

const (
	Success Status = "success"
	Error   Status = "error"
	Fail    Status = "fail"
)

type Response struct {
	Code    int         `json:"code"`
	Status  Status      `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type ErrorResponse struct {
	Code    int    `json:"code"`
	Status  Status `json:"status"`
	Message string `json:"message"`
	Error   string `json:"error"`
}

func SendResponse(
	c *gin.Context,
	code int,
	message string,
	data interface{},
	err error,
) {
	if err != nil {
		SendErrorResponse(c, code, message, err)
		return
	} else {
		SendSuccessResponse(c, code, message, data)
		return
	}
}

func SendSuccessResponse(
	c *gin.Context,
	code int,
	message string,
	data interface{},
) {
	c.JSON(code, Response{
		Code:    code,
		Status:  Success,
		Message: message,
		Data:    data,
	})
}

func SendErrorResponse(
	c *gin.Context,
	code int,
	message string,
	err error,
) {

	status := getStatus(code)

	c.JSON(code, ErrorResponse{
		Code:    code,
		Status:  status,
		Message: message,
		Error:   err.Error(),
	})
}

func getStatus(code int) Status {
	if code >= 200 && code < 300 {
		return Success
	}

	if code >= 400 && code < 500 {
		return Fail
	}

	return Error
}