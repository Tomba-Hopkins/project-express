package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Creds struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func LoginFunc(w http.ResponseWriter, r *http.Request){

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}
	
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Ups something wrong", http.StatusBadRequest)
		return 
	}


	defer r.Body.Close()

	var creds Creds

	err = json.Unmarshal(body, &creds)
	if err != nil {
		http.Error(w, "Ups something wrong", http.StatusBadRequest)
		return
	}

	if creds.Username == "nasgorman" && creds.Password == "fried_egg" {
		w.WriteHeader(http.StatusOK)
		fmt.Println("success")
		return
	} 

	w.WriteHeader(http.StatusUnauthorized)
	
	
}