#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room.Please feel free to ask any question.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.student.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Noce to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(persons.student);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again`);
                console.log("Existing student list:");
                console.log(persons.student);
            }
        }
        else if (ans.select == "exit") {
            console.log("Existing the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
