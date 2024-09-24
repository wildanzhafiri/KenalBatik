package helper

import "math/rand"

func GenerateRandomStringNumber() string {
	alphaNumRunes := []rune("1234567890")
	randomRune := make([]rune, 8)

	for i := 0; i < 25; i++ {
		randomRune[i] = alphaNumRunes[rand.Intn(len(alphaNumRunes)-1)]
	}

	return string(randomRune)
}
