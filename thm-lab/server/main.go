package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
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
                        fmt.Fprintf(w, "mantap")
                        return
        }

        w.WriteHeader(http.StatusUnauthorized)
        fmt.Fprintf(w, "gagal login")

}


func TestFunc(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Test done")
}


func main() {

        mux := http.NewServeMux()
        mux.HandleFunc("/test", TestFunc)
        mux.HandleFunc("/login", LoginFunc)

        fmt.Println("server run on http://0.0.0.0:8080")
        log.Fatal(http.ListenAndServe("0.0.0.0:8080", mux))

}
