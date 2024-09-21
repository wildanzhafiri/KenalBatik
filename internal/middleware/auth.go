package middleware

import (
	"kenalbatik-be/internal/infra/jwt"
	"strings"

	"github.com/gin-gonic/gin"
)

type Middleware struct {
	jwt jwt.JWTInterface
}

func NewMiddleware(jwt jwt.JWTInterface) *Middleware {
	return &Middleware{
		jwt: jwt,
	}
}

func (m *Middleware) Authentication(c *gin.Context) {
	bearerToken := c.GetHeader("Authorization")
	if bearerToken == "" {
		c.JSON(401, gin.H{
			"message": "Unauthorized",
			"error":   "Bearer token is required",
		})
		c.Abort()
		return
	}

	token := strings.Split(bearerToken, " ")
	if len(token) != 2 {
		c.JSON(401, gin.H{
			"message": "Unauthorized",
			"error":   "Bearer token is required",
		})
		c.Abort()
		return
	}

	id, err := m.jwt.ValidateToken(token[1])
	if err != nil {
		c.JSON(401, gin.H{
			"message": "Unauthorized",
			"error":   err.Error(),
		})
		c.Abort()
		return
	}

	idString := id.String()

	c.Set("id", idString)
	c.Next()
}
