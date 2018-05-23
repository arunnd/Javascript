//var is declared auto
function sayHi() {
    phrase = "Hello";
  
    alert(phrase);
  
    var phrase;
  }

  //var is global or fucntion scope
  if (true) {
    var test = true; // use "var" instead of "let"
  }
  
  alert(test); // true, the variable lives after if

  //
  function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    alert(phrase); // works
  }
  
  sayHi();
  alert(phrase); // Error: phrase is not defined