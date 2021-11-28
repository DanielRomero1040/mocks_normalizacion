const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productos");

mongoose.connection.on("open", ()=>{
    console.log("Base de datos conectada con exito");
})
mongoose.connection.on("error", ()=>{
    console.log("Error al conectarse a la Base de datos");
})