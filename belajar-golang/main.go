package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Tomba-Hopkins/project-express/belajar-golang/handler"
)

func main() {

	http.HandleFunc("/shop", handler.ShopFunc)


	fmt.Println("server run on http://localhost:8080/shop")
	log.Fatal(http.ListenAndServe("localhost:8080", nil))

}