class MyError extends Error {
    constructor(msg, code){
        super()
        this.pesan = msg
        this.kode = code 
    }
}

export default MyError