import { Router } from 'express';

const router = Router()

let visitas = 0

router.get("/", async (req, res) => {
   res.send(`Cantidad de visitas al sitio: ${++visitas}`)
});

export default router