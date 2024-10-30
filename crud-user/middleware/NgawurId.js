import mongoose from "mongoose";


const koleksiParam = ['id', 'user_id', 'biodata_id']


export default (balik = '/') => {
    return async (req, res, next) => {
        const adaId = koleksiParam.find((p) => req.params[p])

        if (!adaId){
            return next()
        }

        const idLu = req.params[adaId]
        if(!mongoose.Types.ObjectId.isValid(idLu)){
            req.flash('err', 'Ngawur aja jadi orang')
            return res.redirect(balik)
        }


        next()
    }
}