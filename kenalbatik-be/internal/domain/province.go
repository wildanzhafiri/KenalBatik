package domain

type Province struct {
	ID   int    `json:"id" gorm:"primaryKey;autoIncrement"`
	Name string `json:"name"`
}

type ProvinceParams struct {
	ID int
}
