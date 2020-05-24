const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const req_time = new Date
  res.on('finish', () => {
    const res_time = new Date
    const duration = res_time - req_time
    const server_log = `${req_time.toLocaleString()} | ${req.method} from ${req.url} | total time: ${duration}ms`
    console.log(server_log)
  })
  next()
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})