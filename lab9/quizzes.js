class Student {
    constructor(id) {
        this.studentId = id;
        this.answers = [];

    }
    addAnswer(question) {
        this.answers.push(question)
    }
}

class Question {
    constructor(id, correctAnswer) {
        this.qid = id;
        this.answer = correctAnswer;
    }
    checkAnswer(answer) {
        return answer == this.answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(q => {
            this.questions.set(q.qid, q);
        })

        this.students = students;
    }
    scoreStudentBySid(sid) {
        let stu = this.students.find(s => s.studentId == sid);

        let score = 0;
        if (!stu)
            return 0;

        this.questions.forEach(q => {
            let ans = stu.answers.find(a => a.qid == q.qid);
            if (ans && q.checkAnswer(ans.answer)) {
                score++;
            }
        });
        return score;
    }
    getAverageScore() {
        if (this.students.length == 0)
            return 0;
        let sum = 0;
        let self = this;
        this.students.forEach(s => {
            sum += self.scoreStudentBySid(s.studentId)
        })
        return sum / this.students.length;
    }

}



//Main
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3 

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2 

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

