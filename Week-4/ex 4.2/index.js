const Person = function () {};

Person.prototype.initialize = function (name, age) {
	this.name = name;
	this.age = age;
};

const Teacher = function () {};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
	console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = new Teacher();
teacher.initialize('Chirag', 25);
teacher.teach('JavaScript'); // Chirag is now teaching JavaScript
