package handler

import (
	"fmt"
	"net/http"
)

func TestFunc(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Test done")
}