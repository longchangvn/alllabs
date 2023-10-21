const express = require("express")
const userRoutes = require("./routers/userRoute")
const productRoutes = require("./routers/productRouter")
const app = express();
const {logErrors, clientErrorHandler, errorHandler} = require("./handler/errorHandler")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"))

app.use("/users",userRoutes)
app.use("/products",productRoutes)
app.use("/err",(req,res,next)=>{
    next("Err")
})
app.use((req,res,next)=>{
    res.redirect("/view/404.html")
})

app.use(errorHandler)
app.listen(3000, () => {
    console.log("Server stated")
});