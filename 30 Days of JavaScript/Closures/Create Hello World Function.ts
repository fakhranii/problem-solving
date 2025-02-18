function createHelloWorld(): () => string {
  return function () {
    return "Hello World";
  };
}

// Example usage
const helloWorld = createHelloWorld();
console.log(helloWorld()); // Output: "Hello World"
