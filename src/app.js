import express from 'express'
import Products from './routes/products.router.js'
import Carts from './routes/carts.router.js'
import Info from './routes/info.router.js'
import Randoms from './routes/randoms.router.js'
import Visitas from './routes/visitas.router.js'
import PORT from '../src/port.js'


export const AUTH_TOKEN = '123456'

const app = express()

app.use(express.json())

const server = app.listen(PORT().port, () => {
    console.log(PORT().message)
})

app.use('/api/products', Products)
app.use('/api/carts', Carts)
app.use('/info', Info )
app.use('/api/random', Randoms)
app.use('/api/visitas', Visitas)
