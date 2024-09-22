package domain

type Island struct {
	ID   int    `json:"id" gorm:"primaryKey;autoIncrement"`
	Name string `json:"name"`
}

type IslandParams struct {
	ID int
}