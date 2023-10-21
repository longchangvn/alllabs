let students = [{
    id:"661227",
    name:"JP Morgan",
    program:"MSD"
}]
class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }
    static getStudents() {
        return students;
    }
    static getStudentById(id) {
        return students.find(s => s.id === id);
    }
    createStudent() {
        students.push(this);
        return this;
    }
    static deleteStudent(id) {
        let index = students.findIndex(s => s.id === id);
        if (index >= 0)
            return students.splice(index, 1)[0];
        return undefined;
    }
    static updateStudent(student){  
        let index = students.findIndex(s=>s.id === student.id)
        if(index>=0){
            return students.splice(index,1,student)[0]
        }
        return null;
    }
    static filterByProgram(p){
        return students.filter(s=>s.program === p);
    }
}

module.exports = Student;