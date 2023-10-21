const express = require("express")
const cors = require("cors")
const app = express()
const studentRoute = require("./router/studentRoute")
app.use(cors());

app.use(express.json())
app.use("/students", studentRoute)

app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Resource not found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server Error try again later" })
})
app.listen(5001, () => {
    console.log("server started")
})