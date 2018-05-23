var phrase = "Hello";

function sayHi() {
  alert(phrase);
}

// can read from window
alert( window.phrase ); // Hello (global var)
alert( window.sayHi ); // function (global function declaration)

// can write to window (creates a new global variable)
window.test = 5;

alert(test); // 5

///But the global object does not have variables declared with let/const!- ES15



/////////////////////////////
//Uses - to access global var
var user = "Global";

function sayHi() {
  var user = "Local";

  alert(window.user); // Global
}

sayHi();

//////////////////////
//this and window are same
alert( this === window ); // true