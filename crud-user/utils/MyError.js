class MyError extends Error {
    constructor(msg, code){
        super() // ngambil method2 dari class Error jadi ga cuman .pesan ama .kode
        this.pesan = msg
        this.kode = code 
    }
}

export default MyError