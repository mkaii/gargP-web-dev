console.log("Mainak Ghosh");

//console.log(age);

if (true) {
  var age = 22;
}

console.log(age);

const fn = "Mainak";
const ln = "Ghosh";

console.log(sum(1, 2, 3, 4, 5));

console.log(fn + " " + ln);

let lastLogIn = null;

const person = {
  fn: "Mainak",
  ln: "Ghosh",
  age: 26,
  login: true,
};

console.log(person);

console.log(person.login + " " + person["fn"]);

console.log(typeof null);
console.log(typeof ("123" * 1));

age != 22 ? console.log("Mainak") : console.log("Ghosh");

function sayHi() {
  console.log(arguments);
  console.log("Mainak is using a function!!");
}

function sum(...numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

const students = ["lala lala", "Mainak", 1, 2, 3];

//students.push("lala");

console.log(students);

//students.forEach((val) => console.log(val + " t"));

//const newStudents = students.map((val) => val + " Ghosh");

//console.log(newStudents);

const ans = students.find((val) => val == "lala lala");

console.log(ans);

let slicedArray = students.slice(2, 4);

console.log(slicedArray);
