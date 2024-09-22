let str="123.456";
console.log(Number(str));           //123.456
console.log(typeof Number(str));    //number

console.log(parseInt(str));           //123
console.log(typeof parseInt(str));    //number

console.log(parseFloat(str));          //123.456
console.log(typeof parseFloat(str));   //number
// --------------------------------------------------------------------------

let isTrue=true;
console.log(String(isTrue));           //"true"
console.log(typeof String(isTrue));    //string

console.log(Number(isTrue));           //1
console.log(typeof Number(isTrue));    //number
// --------------------------------------------------------------------------

let a=456;
console.log(String(a));                //"456"
console.log(typeof String(a));         //string

console.log(a.toString());            //"456"
console.log(typeof a.toString());     //string

console.log(`${a}`);                  //"456"
console.log(typeof `${a}`);           //string

// --------------------------------------------------------------------------

let num1=0;
let num2=1;
let str1="";
let str2="Hello!"
let x=null;
let y=undefined;
let z=NaN;

console.log(Boolean(num1));          //false
console.log(Boolean(num2));          //true
console.log(Boolean(str1));          //false
console.log(Boolean(str2));          //true

// null represent absence of any value hence when it is converted to boolean
// it gives false  likewise undefined represent a variable which is declared
// but not initialized hence when converted to boolean it gives false.
console.log(Boolean(x));             //false
console.log(Boolean(y));             //false

// NaN represent result of invalid operation like 0/0.math.sqrt(-1)
// so it returns false
console.log(Boolean(z));

// -----------------------------------------------------------------------------

let arr=[1,2,3];
console.log(String(arr));             //"1,2,3"
console.log(typeof String(arr));      //string

console.log(Number(arr));             //NaN
console.log(typeof Number(arr));      //number
// -----------------------------------------------------------------------------------

let obj={
    name:"abc",
    age:30
}

console.log(String(obj));            //[object Object](string representation of object)
console.log(typeof String(obj));     //string

console.log(Number(obj));            //NaN
console.log(typeof Number(obj));     //number





























