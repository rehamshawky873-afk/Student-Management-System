class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    // Get Grade
    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 90) {
            return "A";
        } else if (avg >= 80) {
            return "B";
        } else if (avg >= 70) {
            return "C";
        } else if (avg >= 60) {
            return "D";
        } else if (avg >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Get Final Result
    getResult() {
        let avg = this.calculateAverage();

        if (avg >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// Create Students
let studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mona", [45, 48, 42], 80),
    new Student(3, "Ali", [40, 45, 48], 70),
    new Student(4, "Sara", [70, 80, 75], 95)
];

// Print Students Reports
console.log("===== Students Reports =====");

studentsList.forEach(student => {
    console.log({
        Name: student.name,
        Average: student.calculateAverage(),
        Grade: student.getGrade(),
        Result: student.getResult()
    });
});

// Filter Weak Students
let weakStudents = studentsList.filter(student => {
    let avg = student.calculateAverage();
    return avg >= 40 && avg <= 49;
});

// Add 5 Grace Marks
let graceStudents = weakStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// Calculate Total
let totalNewAverages = graceStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Calculate Grace Average
let graceAverage = graceStudents.length > 0
    ? totalNewAverages / graceStudents.length
    : 0;

// Print Results
console.log("===== Grace Students =====");
console.log(graceStudents);

console.log("Average after Grace Marks:", graceAverage);