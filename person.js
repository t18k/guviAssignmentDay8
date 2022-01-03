class Person {
	constructor(fname, lname, age, gender) {
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.gender = gender;
	}
	getName() {
		return `${this.fname} ${this.lname}`;
	}
	getDetails() {
		return `Hi, Iam ${this.fname} ${this.lname} and ${this.age}${this.gender}`;
	}
}
