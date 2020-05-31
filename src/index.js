const express = require('express')
const PORT = 80

const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT)