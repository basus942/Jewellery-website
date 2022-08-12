require("dotenv").config();
const express=require("express");
const app=express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/aboutus",(req,res)=>{
res.render("aboutus")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
    })

    app.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
      });