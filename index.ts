const express = require('express')
const app = express()
const port = 3000
import { Request, Response } from 'express'
import shell from 'shelljs'

app.get('/worker/available-port', (req: Request, res: Response) => {
    console.log(req.ip)
    const cmd = shell.exec('/bin/bash /opt/worker/scripts/available-port.sh 10000 10005')
    const port = Number(cmd.stdout.replace('\n', ''))
    console.log(cmd)
    res.send({ availablePort: port || null })
})

app.get('/worker/start-container', (req: any, res: any) => {
    res.send('Not implemented')
})

app.get('/worker/projet-status', (req: any, res: any) => {
    res.send('Not implemented')
})

app.listen(port, () => {
    console.log(`WORKER ON http://localhost:${port}`)
})