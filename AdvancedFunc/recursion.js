//Separating a task into multiple task
//Whwn a func calls itself


function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); 

  //Another way-shorter
  function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

  //To know
  //Execution context -stack
  //The recursion depth in this case was: 3.
  /** 
   * Stack
  Context: { x: 2, n: 1, at line 1 } pow(2, 1)
Context: { x: 2, n: 2, at line 5 } pow(2, 2)
Context: { x: 2, n: 3, at line 5 } pow(2, 3) */