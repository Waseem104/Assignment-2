let str="my name is waseem akram";

console.log(str.length);                //23
console.log(str.charAt(0));             //m
console.log(str.charAt(str.length-1));  //m

// --------------------------------------------------------------------------

let str1="My NaMe Is WaseeM AkraM";
console.log(str1.toLowerCase());        //my name is waseem akram
console.log(str1.toUpperCase());        //MY NAME IS WASEEM AKRAM

// ------------------------------------------------------------------------------

let str2="lastindexof";
console.log(str2.slice(1,6));          //astin
console.log(str2.slice(-7,-2));        //index
console.log(str2.substring(1,5));      //asti
// console.log(str2.substring(-5,-1));    

// -----------------------------------------------------------------------------------

// find the position and replace the word
let str3="i am from bengaluru";
let result=str3.indexOf("from");
console.log(result);                   //5
console.log(str3.indexOf("n"));        //12
let replace=str3.replace("bengaluru","mysore");
console.log(replace);                   //i am from mysore

// ---------------------------------------------------------------------------------------

// remove the whitespaces
let str4="   i am from bengaluru     ";
console.log(str4.trim());             //i am from bengaluru
console.log(str4.trimStart());        //"i am from bengaluru     "     
console.log(str4.trimEnd());          //"   i am from bengaluru"

// -----------------------------------------------------------------------------------------

// convert the string into arrays 
let str5="apple,banana,cherry,mango,orange";
let array=str5.split(",");
console.log(array);                   //['apple', 'banana', 'cherry', 'mango', 'orange']

// -------------------------------------------------------------------------------------------

//check weather specific word is present or not
let str6="javascript is programming language";
console.log(str6.includes("programming"));        //true

// ------------------------------------------------------------------------------------------

// concat two strings
let str7="hello";
let str8="world!";
console.log(str7.concat(" ",str8));    //"hello world!"
console.log(str7+ " "+str8);           //"hello world!"














