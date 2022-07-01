let greetText="Hello from global"
 
function greeting() {
 
  let greetText="Hello"
 
  //Creation of sayHi function inside the greeting Scope
  //Hence the greeting scope is the parent scope of sayHi
  sayHi= function() {
    console.log(greetText);
  }
 
  //Invoking sayHi
  sayHi();   //Hello
}
 
//Invoking the greeting function. 
//A new scope is created for greeting
greeting();

function greeting2(){
    console.log(greetText);
}

greeting2()