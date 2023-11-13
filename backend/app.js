require('dotenv').config()
const express = require('express')
const { connectDB } = require('./database/db')
const app  = express()
const port = process.env.PORT
const cors = require('cors')
const userRouter = require('./routes/routes')
const productRouter = require('./routes/productRouter')


connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)

app.all('*', (req, res)=>{
    res.status(404).json(`<h1>404!</h1> <p><Page not found</p>`)
})
app.listen(port, ()=>{
    console.log(`Server is listening to the port on ${port}`)
})