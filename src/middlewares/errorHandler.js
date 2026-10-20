const errorHandler = (error, req, res, next) => {
    res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor'
    })
}

export default errorHandler