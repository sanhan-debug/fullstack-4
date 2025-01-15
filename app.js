import express from 'express'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import { productRouter } from './Routes/productRouter.js'
import cors from 'cors'
// mongodb+srv://sanhan:sanhans2006@products.n1neu.mongodb.net/?retryWrites=true&w=majority&appName=products
dotenv.config()
const URI = process.env.URI

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("server is active")
})

app.use("/",productRouter)


app.listen(3001,()=>{
    console.log("server is active 3001")

    connect(URI).then(()=>console.log("connected to the db"))
})