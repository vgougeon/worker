const express = require('express')
const app = express()
const port = 3000
import { Request, Response } from 'express'
import shell from 'shelljs';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/worker/available-port', (req: Request, res: Response) => {
    console.log(req.ip)
    const cmd = shell.exec('/bin/bash /opt/worker/scripts/available-port.sh 10000 10005')
    const port = Number(cmd.stdout.replace('\n', ''))
    console.log(cmd)
    res.send({ availablePort: port || null })
})

app.post('/worker/start-container', async (req: any, res: any) => {
    console.log(req.body)
    try {
        let cmd = await shell.exec(`ansible-playbook -vv /opt/worker/refactor_ansible/deploy.yml  --extra-vars "git_url=${req.body.url} project_id=${req.body.id} project_type=${req.body.template}"`, {async:true})
        res.send('SUCCESS')
    }
    catch {
        res.status(400).send('FAILED')
        let cmd = await shell.exec(`ansible-playbook -vv /opt/worker/refactor_ansible/deploy.yml  --extra-vars "git_url=${req.body.url} project_id=${req.body.id} project_type=${req.body.template}"`, {async:true})
        console.log(cmd)
    }
})

app.post('/worker/project-status', (req: any, res: any) => {
    console.log('PROJECT STATUS', req.body)
    const cmd = shell.exec(`/bin/bash /opt/worker/scripts/project-status.sh ${req.body.id}`)
    res.send({ cmd })
})

app.listen(port, () => {
    console.log(`WORKER ON http://localhost:${port}`)
})