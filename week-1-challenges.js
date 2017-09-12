// Week 1 Challenges

function Person(name, title) {
  this.name = name
  this.title = title
};

var person = new Person("Sam", "Student");
console.log(person);

console.log("------------------------\n");

var nameTitle = [];

var person2 = new Person("Brandon Stark", "the Three-Eyed Raven");
var person3 = new Person("Jon Snow", "the King in the North");
var person4 = new Person("Cersei Lannister", "Queen of the Andals and the First Men");
var person5 = new Person("Danerys Targaryen", "the Mother of Dragons");

nameTitle.push(person);
nameTitle.push(person2);
nameTitle.push(person3);
nameTitle.push(person4);
nameTitle.push(person5);

console.log(nameTitle);

console.log("------------------------\n");

function onlyNamesWith(letter) {
  return nameTitle.filter( function(person) {
    return person.name.charAt(0).toLowerCase() === letter.toLowerCase();
  });
};

console.log(onlyNamesWith("s"));

console.log("------------------------\n");

function matchingTitle(title) {
  return nameTitle.filter( function(person) {
    return person.title.toLowerCase() === title.toLowerCase();
  });
};

console.log(matchingTitle("the Mother of Dragons"));

console.log("------------------------\n");

function combineNameAndTitle() {
  return nameTitle.map( function(person) {
    return person.name + " " + person.title;
  });
}

console.log(combineNameAndTitle());

console.log("------------------------\n");

let numArray = [];
for(var i = 0; i < 100; i++) {
  numArray.push(Math.random());
}

function halfAndAbove() {
  return numArray.filter(function(num) {
    return num >= 0.5;
  });
};

console.log(halfAndAbove());

console.log("------------------------\n");

function belowHalf() {
  return numArray.filter(function(num) {
    return num < 0.5;
  });
};

console.log(belowHalf());

console.log("------------------------\n");

function sumArray(array) {
  return array.reduce(function(sum, number) {
    return sum + number;
  });
};

console.log(sumArray(numArray));

console.log("------------------------\n");

function averageOfArray(array) {
  return sumArray(array) / array.length;
};

console.log(averageOfArray(numArray));
