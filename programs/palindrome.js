function isPalindrome(string){
    let reverseString="";
    for(let i=string.length-1;i>=0;i--){
        reverseString+=string.charAt(i);
    }
    if(string===reverseString){
        return "the given string is palindrome";
    }
    else 
     return "given string is not a palindrome";
}
console.log(isPalindrome("aaggba"));
