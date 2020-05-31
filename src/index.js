const express = require('express')
const app = express()
const path = require('path')
const PORT = 80 || 8080

const routes = require('./routes')


app.use(express.json())
app.use(routes)

app.use('/', express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});