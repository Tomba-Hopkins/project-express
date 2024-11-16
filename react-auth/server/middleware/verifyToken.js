import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const {kuki} = req.cookies
    if(!kuki) return res.status(403).json({
        message: 'Not authorized',
        status: 403,
        redirect: '/login'
    })

    jwt.verify(kuki, process.env.JWT, (err, decode) => {
        if(err) return res.status(403).json({
            message: 'Not authorized',
            status: 403,
            redirect: '/login'
        })
        req.useroi = decode
        next()
    })

}


export default verifyToken