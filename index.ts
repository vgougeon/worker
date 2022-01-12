const express = require('express')
const app = express()
const port = 3000
import shell from 'shelljs'

app.get('/available-port', (req: any, res: any) => {
    const cmd = shell.exec('./scripts/open-port')
    console.log(cmd)
    res.send(cmd)
})

app.get('/start-container', (req: any, res: any) => {
    res.send('Not implemented')
})

app.get('/projet-status', (req: any, res: any) => {
    res.send('Not implemented')
})

app.listen(port, () => {
    console.log(`WORKER ON http://localhost:${port}`)
})