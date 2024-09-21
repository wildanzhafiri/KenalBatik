package oauth

import (
	"kenalbatik-be/internal/infra/env"
	"net/http"

	"github.com/gin-gonic/gin"
	oauth2 "golang.org/x/oauth2"
	google "golang.org/x/oauth2/google"
)

type OauthInterface interface {
	GetConfig() *oauth2.Config
	GetUserInfo(c *gin.Context) (*http.Response, error)
}

type OauthStruct struct {
	Config *oauth2.Config
}

var Oauth = getOauth()

func getOauth() OauthInterface {
	redirectUrl := "http://localhost:" + env.AppEnv.APP_PORT + "/api/v1/users/oauth/callback"

	config := &oauth2.Config{
		ClientID:     env.AppEnv.GOOGLE_CLIENT_ID,
		ClientSecret: env.AppEnv.GOOGLE_CLIENT_SECRET,
		RedirectURL:  redirectUrl,
		Scopes:       []string{"email", "profile"},
		Endpoint:     google.Endpoint,
	}

	return &OauthStruct{Config: config}
}

func (o *OauthStruct) GetConfig() *oauth2.Config {
	return o.Config
}

func (o *OauthStruct) GetUserInfo(ctx *gin.Context) (*http.Response, error) {
	code := ctx.Query("code")

	token, err := o.Config.Exchange(ctx, code)
	if err != nil {
		return nil, err
	}

	client := o.Config.Client(ctx, token)

	resp, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		return nil, err
	}

	return resp, nil
}