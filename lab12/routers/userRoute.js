const express = require("express")
const router = express.Router();
const jsonParser = express.json;
global.users = [{
    email:"e1@email.com",
    password:"123"
}];

router.get("/:id", (req, res, next) => {
    res.json(global.users.find(u => u.email == req.params.id));

})
router.get("/", jsonParser(), (req, res, next) => {
    res.json(global.users);

})
router.post("/", jsonParser(), (req, res, next) => {
    
    global.users.push(req.body)
    res.json({})
})
module.exports = router;