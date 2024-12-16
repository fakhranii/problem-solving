/*
write a Js code to get the extension of a filename
*/

// const fileName = (name) => name.split(".")[1];
const fileName = (name) => name.slice(name.lastIndexOf("."));

console.log(fileName("ziad.pdf"));
