//A closure is a function that remembers its outer variables and can access them. 
//all functions in JavaScript are closures, 
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }
  sayHiBye("Sai","chandu");

  //////////inside var are not acceses outside