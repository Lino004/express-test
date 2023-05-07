const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()
const port = 9000

router.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/.netlify/functions/api', router)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;
module.exports.handler = serverless(app)
