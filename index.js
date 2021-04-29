const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Connected')
}).catch((e)=>{
    console.log(e)
    console.log('Failed')
})

app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))

app.get('/', (req, res)=>{
    res.send('<h1>Info Penerima Bantuan Covid</h1>')

})

app.use('/penerima/', require('./routes/penerima'))

app.listen(3000, () => {
    console.log('Server Started')
})
