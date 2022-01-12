const express = require('express')
const app = express()
const port = 3000
import shell from 'shelljs'

app.get('/available-port', (req: any, res: any) => {
    const cmd = shell.exec('/bin/bash /opt/worker/scripts/available-port.sh 10000 10005')
    const port = Number(cmd.stdout.replace('\n', ''))
    console.log(cmd)
    res.send({ availablePort: port })
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