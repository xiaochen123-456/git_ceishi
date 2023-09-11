const express = require('express')
const router = require('./router')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())



// 挂载路由
app.use('/api',router)

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}!`))