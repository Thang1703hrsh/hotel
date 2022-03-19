const path = require('path')
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const exp = require('constants');
const route = require('./routes')
const app = express()
const port = 3000
// thư mục dữ liệu puplic lên
app.use(express.static(path.join(__dirname,'public')))
//cài đặt middle ware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs',engine({
  extname :".hbs"
}))
app.set('view engine','hbs')

//Set views path 
app.set('views',path.join(__dirname,'resources/views'))

// Init route
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})