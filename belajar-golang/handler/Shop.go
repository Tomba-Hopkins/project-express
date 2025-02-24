package handler

import (
	"fmt"
	"net/http"
)

func ShopFunc(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Hai ini di %s", r.URL.Path)
}