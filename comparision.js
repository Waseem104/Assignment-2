let a=10;
let b=7;

console.log(a==b);  //false
console.log(a===b);  //false
console.log(a!=b);   //true
console.log(a!==b);  //true
console.log(a>b);    //true
console.log(a<b);    //flase
console.log(a>=b);   //true
console.log(a<=b);   //false

// ------------------------------------------------------------------------------

let x=5;
let y='5';

console.log(x==y);   //true
console.log(x===y);  //false
console.log(x!=y);   //false
console.log(x!==y);  //true

// --------------------------------------------------------------------------------

let c=null;
let d=undefined;

console.log(c==d);   //true
console.log(c===d);  //false

// --------------------------------------------------------------------------------

let arr1=[];
let arr2=[];

console.log(arr1==arr2);     //false
console.log(arr1===arr2);    //false

// ----------------------------------------------------------------------------------

let obj1={};
let obj2={};

console.log(obj1==obj2);    //false
console.log(obj1===obj2);   //false

//  arrays and objects are reference types means when we compare arrays using == or ===,
//  you are comparing their memory addresses not their contents.



















