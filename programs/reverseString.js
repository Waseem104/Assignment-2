function reverseString(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str.charAt(i);
    }
    return reverse;
}
console.log(reverseString("hello, world!"));
console.log(reverseString("javascript is programming language"));

