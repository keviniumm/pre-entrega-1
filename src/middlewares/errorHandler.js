const errorHandler = (error, req, res, next) => {
    console.error('Error en la solicitud:', error)

    if (res.headersSent) {
        return next(error)
    }

    res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor'
    })
}

export default errorHandler