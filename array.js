let arr=["apple","banana","mango"];

arr.push("orange");
console.log(arr);      //['apple', 'banana', 'mango', 'orange']

arr.pop();
console.log(arr);      //['apple', 'banana', 'mango']

arr.unshift("grapes");
console.log(arr);       //['orange', 'apple', 'banana', 'mango']

arr.shift();
console.log(arr);       //['apple', 'banana', 'mango']

// ----------------------------------------------------------------------------------------

let numbers=[10,20,30,40];
console.log(arr.length);   //3

console.log(arr[0]);                 //apple
console.log(arr[arr.length-1]);       //mango

// ------------------------------------------------------------------------------------------

let colors=["red", "green", "blue", "yellow", "purple"];
colors.splice(2,1);
console.log(colors);           //['red', 'green', 'yellow', 'purple']

colors.splice(2,0,"orange","pink");
console.log(colors);           //['red', 'green', 'orange', 'pink', 'yellow', 'purple']

let subArr=colors.slice(0,3);
console.log(subArr);           //['red', 'green', 'orange']

let sentence=["Hello", "world", "this", "is", "JavaScript"];
let result=sentence.join(" ");
console.log(result);                //"Hello world this is JavaScript"
console.log(typeof result);         //string












