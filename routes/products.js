const express = require("express");



const {Router} = express;

const router =  new Router();


//----------------------------------------

router.get("/",(req,res)=>{
    res.sendFile("public/index.html", {root: "."})
})

router.get("/api/productos-test",(req,res)=>{
    res.sendFile("public/index.html", {root: "."})
})


router.post("/save",(req,res)=>{
    let obj={
        title:req.body.title,
        price:req.body.price,
        thumbnail:req.body.thumbnail
    }
    console.log(obj)
    newContainer.save(obj).then( () => {
        
        res.send("Registro guardado")
    })
    .catch(err => {
        res.send("Registro no guardado")
    })
})

//----------------------------------------
module.exports = router;
