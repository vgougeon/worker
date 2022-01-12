const express = require('express')
const app = express()
const port = 3000

app.get('/available-port', (req: any, res: any) => {
    res.send('Not implemented')
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