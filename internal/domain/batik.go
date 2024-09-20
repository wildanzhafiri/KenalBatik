package domain

type Batik struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Province    string `json:"province"`
	Island      string `json:"island"`
	Link_Image  string `json:"link_image"`
}

type BatikParams struct {
	Province string `json:"province"`
	Island   string `json:"island"`
}