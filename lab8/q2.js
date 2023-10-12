
function Student(f, l, grades) {
    this.firstName = f;
    this.lastName = l;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverage = function () {
    let sum = this.grades.reduce((s, e) => s + e);
    let len = this.grades.length;
    return len == 0 ? 0 : sum / len;
}

let arr = [new Student("s1", " ", [8,9, 10, 7]), new Student("s2", " ", [6,10,10,7]), new Student("s3", " ", [7,10,10])]
let sum = 0;
arr.forEach(e => {
    sum += e.computeAverage()
})
let avg = sum / arr.length
console.log(avg);