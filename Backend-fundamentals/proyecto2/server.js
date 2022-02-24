const express = require("express")
const { port } = require("./config")
const {query} = require("./config/database")
const handlebars = require("express-handlebars")



const app = express()

app.engine('handlebasr',handlebars.engine())
app.set("view engine",'handlebars')
app.set("views","views")

app.get("/",async(req,res)=>{
    const users = await query("SELECT * FROM users")
    return res.json(users)
})


app.listen(port, function(){
    console.log("Funcionando........ http://localhost:"+process.env.PORT)
})