require('dotenv').config()
require("./Model/db")

const express =  require("express")
const route = require("./route/User")
const bodyparser = require("body-parser")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.use("/user",route)
app.get("/",(req,res)=>{
    res.render("Dasebord")
})
const port = process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`Server Start on ${port}`);
})