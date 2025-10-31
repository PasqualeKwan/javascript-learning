// --- lesson_9_intro_to_typescript.ts ---
// --- Typescript ---
// Key Points
// 1 - Static Typing
// 2 - Compiles to JavaScript
// 3 - Enhanced IDE Support
// JavaScript
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// TypeScript
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("Cloud Engineer"); // This works
// greet(42); // This would cause a TypeScript error
