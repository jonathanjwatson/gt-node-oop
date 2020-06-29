// console.log("Hello world!");

// alert
// prompt
// confirm

// window.alert()
// window.prompt()
// confirm.prompt()

// console.log(process.argv);
// const inquirer = require("inquirer");
// // var inquirer = require("inquirer");

// inquirer
//   .prompt([
//     {
//       type: "list",
//       name: "favoriteDay",
//       message: "What is your favorite day of the week?",
//       choices: ["Monday", "Tuesday", "Thursday", "Wednesday"],
//     },
//   ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function Animal(noise) {
  this.noise = noise;
  this.makeNoise = function () {
    console.log(this.noise);
  };
  // Getters and Setters
  this.getNoise = function () {
    return this.noise;
  };
  this.setNoise = function (noise) {
    this.noise = noise;
  };
}

// const dog = {
//   noise: "Woof!",
//   makeNoise: function () {
//     console.log(this.noise);
//   },
// };
const dog = new Animal("Bow wow!");

const { noise } = dog;
// console.log(dog);
// dog.makeNoise();
console.log(dog.getNoise());
dog.setNoise("Woof!");
console.log(dog.getNoise());

console.log(dog.noise);
dog.noise = "Something";
console.log(dog.noise);

// const cat = new Animal("Meow");
// const goat = new Animal("Bleeeeehhhhh");
// const pig = new Animal("Oink");
