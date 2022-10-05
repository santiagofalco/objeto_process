import RANDOM from './random.js'

const MAX = 1000
const MIN = 1

process.on('message', calc => {
    let conteo = {}
    let quantity = RANDOM().random
    let message = RANDOM().message
    console.log(message, quantity)
    for (let i = 0; i < quantity; i++) {
        const numero = Math.floor(Math.random() * (MAX - MIN + MIN) + MIN)
        conteo[numero] = conteo[numero] == undefined ? 1 : conteo[numero] + 1 
    }
    process.send(JSON.stringify(conteo))
})