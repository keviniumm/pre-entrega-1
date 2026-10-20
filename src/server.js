import app from './app.js'
import { config } from './config/env.js'

app.listen(config.port, () => {
    console.log(`Servidor activo en el puerto ${config.port}`)
})