const { urlencoded } = require('express');
const express = require('express')
const pageRoutes = require('./routes/pageRoutes')
const apiRoutes = require('./routes/apiRoutes')
const app = express()
const PORT = process.env.PORT || 3001

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/', pageRoutes)
app.use('/', apiRoutes)
app.listen(PORT, () => {
    console.log('app listening on port 3001')
})