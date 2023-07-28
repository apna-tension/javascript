// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design patter that involves creating and executing a function all in one step, usually used to create a private scope for variables to avoid polluting the global namespace.
let greeting = () => console.log("Hello, I'm Normal Function!");
greeting();
let add = (num1, num2) => {
  return ((num1, num2) => {
    console.log("IIFE function called");
    return num1 + num2;
  })(num1, num2);
  // num1+num2;
};
(() => {
  console.log("Hello, I'm IIFE");
})();

console.log("addition is ", add(5, 6));
