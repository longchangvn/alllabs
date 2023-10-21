const express = require("express")
const router = express.Router();
const jsonParser = express.json;
global.products = []

router.get("/:name", jsonParser(), (req, res, next) => {
    res.end();
})

router.post("/", jsonParser(), (req, res, next) => {
    global.products.push(req.body)
    res.json({})
})

router.get("/", jsonParser(), (req, res, next) => {
    res.json(global.products)
})
module.exports = router;
