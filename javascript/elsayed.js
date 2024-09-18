let myArray = ["Ahmed", "Ail", "Zied", "Elsayed"];
// myArray.unshift("Reda")
let myObject = myArray.reduce((css, value, index) => {
  css[index] = value;
  return css;
}, {});

console.log(myObject);
