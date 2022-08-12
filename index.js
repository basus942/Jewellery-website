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

app.listen(process.env.PORT,()=>{
    console.log("Server is running on http://localhost:3000");
})