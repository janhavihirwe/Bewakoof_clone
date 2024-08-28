const express=require("express")
const {connect}=require("./config/db")
const userRoute=require("./routes/user.route")
const productRoute=require("./routes/product.route")
const sliderRoute=require("./routes/slider.route")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use("/user",userRoute)
app.use("/product",productRoute)
app.use("/slider",sliderRoute)

app.get("/",(req,res)=>{
    res.send("Welcome to bewakoof app")
})

app.listen(process.env.PORT,async()=>{
    try{
        await connect
        console.log(`Database is connected and listening on ${process.env.PORT}`)
    }
    catch(err){
        console.log(err)
    }
})