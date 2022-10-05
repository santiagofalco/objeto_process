import { Router } from 'express';
import RANDOM from '../random.js'
import { fork } from 'child_process'

const router = Router()

router.get("/", async (req, res) => {
    const q = RANDOM().random
    const child = fork('src/calc.js', [`--quantity=${q}`])
    child.send('Comienzo')
    child.on('message', val => {
        res.send(`El resultado de la operacion forkeada es: ${val}`)
    })

});

export default router