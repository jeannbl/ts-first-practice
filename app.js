var messageJS = "Hello from JavaScript";
console.log(messageJS);
var GREETING = "GOOD MORNING"; //(*)
console.log(GREETING);
var message = "Hello World, from Type Script"; //(*)
console.log(message);
//(*) Problems (Cannot redeclared block-scoped variable ´GREETING´) when we compile app.ts to app.js
//when we open app.js file
var heading = document.getElementById('greeting');
heading.textContent = message;
//Error: document is not defined. This is when is compiled. SO in app.js
