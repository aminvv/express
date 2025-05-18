function ErrorNotFound(req, res, next) {
    res.send({
        status: 404,
        message: "notfound page"
    })
}




function ErrorHandler(err, req, res, next) {

    const status = err?.status ?? err?.statusCode?? 500
    res.send({
        status:status,
        message:err?.message ?? "internal server error"
    })

}

module.exports={
    ErrorHandler,
    ErrorNotFound
}