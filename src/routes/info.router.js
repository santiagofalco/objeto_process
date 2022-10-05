import {Router} from 'express';

const router = Router()

router.get("/", async (req, res) => {
    res.send([{'args': process.argv},
    {'node version': process.version},
    {'memoria total reservada':  process.memoryUsage.rss()},
    {'process id': process.pid},
    {'path de ejecución': process.execPath},
    {'carpeta del proyecto': process.cwd()},
])
});
export default router