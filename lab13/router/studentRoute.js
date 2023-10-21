const express = require("express")
const router = express.Router();
const controller = require("../controller/studentController")

router.get("/search",controller.filterByProgram)
router.get("/:id",controller.getStudentById)
router.get("/",controller.getStudents)
router.post("/",controller.createStudent)
router.put("/:id",controller.updateStudent)
router.delete("/:id",controller.deleteStudent)

module.exports = router;