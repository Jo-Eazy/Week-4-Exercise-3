let globalCount = 0;

function showLocalScope() {
    let localCount = 10;
    console.log("Inside showLocalScope - localCount:", localCount);
    console.log("Inside showLocalScope - globalCount:", globalCount);
    localCount += 5;
    console.log("Inside showLocalScope after update - localCount:", localCount);
}

function modifyBothVariables() {
    globalCount += 1;
    console.log("modifyBothCounts - globalCount incremented:", globalCount);
    let localCount = 99;
    console.log("modifyBothCounts own localCount:", localCount);
}

function Student(firstName, lastName, age, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grades = Array.isArray(grades) ? grades.slice() : [];
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

Student.prototype.average = function() {
    if (this.grades.length === 0) return null;
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
};

const student1 = new Student("Gumball", "Watterson", 12, [90, 89, 45]);
const student2 = new Student("Lincoln", "Loud", 11, [56, 92, 53]);
const student3 = new Student("Finn", "The Human", 16, [98, 93]);

const course = {
    name: "Software Development",
    code: "SD101",
    teacher: {
        firstName: "Tyhiesha",
        lastName: "Johnson",
        contact: {
            email: "tyhiesha@lifechoices.co.za",
            office: "Technical Room"
        }
    },
    students: [student1, student2, student3],
    schedule: {
        monday: "8:30 - 16:30",
        friday: "8:30 - 16:30"
    },
    listStudentNames: function() {
        return this.students.map(stud => stud.getFullName());
    }
};

//Building Blocks for testing code (uncomment)
//showLocalScope();
//modifyBothVariables();
//console.log(student1.getFullName(), student1.average());
//console.log(course.teacher.contact);
//console.log(course.listStudentNames());