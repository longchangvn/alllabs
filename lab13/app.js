const express = require("express")
const app = express()
const studentRoute = require("./router/studentRoute")

app.use(express.json())
app.use("/students", studentRoute)

app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Resource not found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server Error try again later" })
})
app.listen(3000, () => {
    console.log("server started")
})