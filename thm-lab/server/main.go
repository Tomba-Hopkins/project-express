package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Tomba-Hopkins/project-express/belajar-golang/handler"
)

func main() {

	http.HandleFunc("/login", handler.LoginFunc)


	fmt.Println("server run on http://127.0.0.1:8080")
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", nil))

}