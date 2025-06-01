class Student {
    constructor(name, age, averageScore) {
        this.name = name;
        this.age = age;
        this.averageScore = averageScore;
    }

    displayInfo() {
        console.log(`Họ tên: ${this.name}, Tuổi: ${this.age}, Điểm TB: ${this.averageScore}`);
    }
}

class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    displayAllStudents() {
        console.log("Danh sách học sinh:");
        this.students.forEach(student => student.displayInfo());
    }

    findTopStudent() {
        if (this.students.length === 0) return null;

        let topStudent = this.students[0];
        this.students.forEach(student => {
            if (student.averageScore > topStudent.averageScore) {
                topStudent = student;
            }
        });
        return topStudent;
    }
}

const manager = new StudentManager();
manager.addStudent(new Student("Nguyễn Văn A", 18, 8.5));
manager.addStudent(new Student("Trần Thị B", 19, 9.2));
manager.addStudent(new Student("Lê Văn C", 17, 7.8));
manager.displayAllStudents();

const topStudent = manager.findTopStudent();
console.log("\nHọc sinh có điểm trung bình cao nhất:");
topStudent.displayInfo();
