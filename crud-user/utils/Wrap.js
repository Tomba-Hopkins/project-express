export default (fn) => {
    return (req, res, next) => {
        // fn(req, res, next).catch(next)
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}

// buat antisipasi -> yg berulang
// try {
//     ...
// } catch(err) {
//     next(err)
// }