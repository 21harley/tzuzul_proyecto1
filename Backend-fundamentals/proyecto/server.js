const express = require("express");
const path = require("path");
const app = express();

//Importando las rutas
const userRoutes = require("./routes/users")


function views(document){
    return path.join(__dirname,"views",document)
}

//Procesos intermedios
//Middleware
//Convirtiendo el body de la peticion
app.use(express.text()) //Cada vez que se haga uso de la app, se ejecuta express.text().
app.use(express.json()) //Cada vez que se haga uso de la app, se ejecuta express.json()
app.use(express.urlencoded({extended:true})) //Cada vez que se haga uso de la app, se ejecuta express.urlencoded()

//Utilizando las rutas
app.use(userRoutes)

app.get('/', function(request, response){
    return response.sendFile(views("index.html"))
});


app.listen(4000,function(){
    console.log("Funcionando........ http://localhost:4000")
});