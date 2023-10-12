
let student = {
    firstName: " ",
    lastName: " ",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverage: function () {
        let sum = this.grades.reduce((s, e) => s + e);
        let len = this.grades.length;
        return len == 0 ? 0 : sum / len;
    }
}

let s1 = Object.create(student);
s1.grades = [];
s1.inputNewGrade(8)
s1.inputNewGrade(9)
s1.inputNewGrade(10)
s1.inputNewGrade(7)


let s2 = Object.create(student);
s2.grades = []
s2.inputNewGrade(6)
s2.inputNewGrade(10)
s2.inputNewGrade(10)
s2.inputNewGrade(7)

let s3 = Object.create(student);
s3.grades = [];
s3.inputNewGrade(7)
s3.inputNewGrade(10)
s3.inputNewGrade(10)


let arr = [s1, s2, s3];

let avgGrade = (s1.computeAverage() + s2.computeAverage() + s3.computeAverage())/3
console.log(avgGrade);