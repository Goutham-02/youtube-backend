const asyncHandler = (requestHnadler) => {
    (req, res, next) => {
        Promise.resolve(requestHnadler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }


// Or this code also works
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
