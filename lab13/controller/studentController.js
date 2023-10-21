const Student = require("../model/Student")
module.exports = {
    createStudent: (req, res, next) => {
        let payload = req.body;
        console.log(payload);
        let student = new Student(payload.id, payload.name, payload.program);
        student.createStudent();
        res.status(201).json(student);
    },
    getStudents: (req, res, next) => {
        res.status(200).json(Student.getStudents())
    },
    getStudentById: (req, res, next) => {
        let id = req.params.id;//id validation
        let student = Student.getStudentById(id);
        if (!student)
            return res.status(404).json({ message: "Resource Not found" });
        return res.status(200).json(student);
    },
    deleteStudent: (req, res, next) => {
        let id = req.params.id;//id validation
        let student = Student.deleteStudent(id);
        if (!student)
            return res.status(404).json({ message: "Resource Not found" });
        return res.status(200).json({ message: "Student Deleted" });
    },
    updateStudent: (req, res, next) => {
        let id = req.params.id;//id validation
        
        let student = Student.updateStudent(req.body);
        console.log("Update student - ", student)
        if (!student)
            return res.status(404).json({ message: "Resource Not found" });
        return res.status(200).json({ message: "Student Update" });
    }
    ,
    filterByProgram: (req, res, next) => {
        let p = req.query.program;
        let result = []
        if (p) {
            result = Student.filterByProgram(p);
        }
        return res.status(200).json(result);
    }
}
