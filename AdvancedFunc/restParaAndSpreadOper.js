//Normal params
function sum(a, b) {
    return a + b;
  }
  
  alert( sum(1, 2, 3, 4, 5) );


  ///////////////////////////////
  //to gather all arguments into array args:
  function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6

  ///////////////////////////////
//the first two arguments go into variables and the rest go into titles array:--The rest parameters must be at the end  

  function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");

///////////////////////////
  //Spread oper

  let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN

//---//
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

//Merged arrays using spread opera
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)