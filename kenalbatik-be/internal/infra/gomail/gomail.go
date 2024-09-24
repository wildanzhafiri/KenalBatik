package gomail

import (
	"kenalbatik-be/internal/infra/env"
	"strconv"

	"gopkg.in/gomail.v2"
)

type GoMailInterface interface{
	SendEmail(subject string, htmlBody string, to string) error
}

type GoMailStruct struct {
	host string
	port int
	username string
	password string
}

var GoMail = getGomail()

func getGomail() GoMailInterface {
	port, err := strconv.Atoi(env.AppEnv.GOMAIL_PORT)
	if err != nil {
		panic(err)
	}

	return &GoMailStruct{
		host: env.AppEnv.GOMAIL_HOST,
		port: port,
		username: env.AppEnv.GOMAIL_USERNAME,
		password: env.AppEnv.GOMAIL_PASSWORD,
	}
}

func (g *GoMailStruct) SendEmail(subject string, htmlBody string, to string) error {
	m := gomail.NewMessage()
	m.SetHeader("From", g.username)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", htmlBody)

	d := gomail.NewDialer(g.host, g.port, g.username, g.password)

	if err := d.DialAndSend(m); err != nil {
		return err
	}

	return nil
}
