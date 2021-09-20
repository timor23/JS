const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    //1.
    findPerson: function (type, id) {
        if (type === `student`)
            return this.students.find((obj) => {
                return obj.id === id;
            });

        if (type === `teacher`)
            return this.teachers.find((obj) => {
                return obj.id === id;
            });
    },
    //2.
    assignStudent: function (id, subject) {
        let stdnt = this.students.find((obj) => obj.id === id);
        let tchr = this.teachers.find((obj) => {
            if (obj.subjects.includes(subject) && obj.capacityLeft > 0)
                return obj;
        });
        tchr.students.push(stdnt);
        tchr.capacityLeft--;
        console.log(stdnt);
    },
    //3.
    assignTeachersSubject: function (id, subject) {
        let tchr = this.teachers.find((obj) => obj.id === id);
        if (!tchr.subjects.includes(subject)) {
            tchr.subjects.push(subject);
        }
    },
    //4.
    showStudentsTooOldToBInSchool: function() {
        return this.students.filter(obj => obj.age > 80);
    }
};

//1.
let r = school.findPerson("student", 13);
console.log(r);
//2.
school.assignStudent(13, "history");
let s = school.findPerson("teacher", 2);
console.log(s);
//3.
school.assignTeachersSubject(1, `math`);
let a = school.findPerson("teacher", 1);
console.log(a);
//4.
console.log(school.showStudentsTooOldToBInSchool());