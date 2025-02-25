package main

import (
	"belajar-go/handler"
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/test", handler.TestFunc)
	http.HandleFunc("/login", handler.LoginFunc)


	fmt.Println("server run on http://127.0.0.1:8080")
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", nil))

}