function longest(str){
    let longestWord="";
    let word=str.split(" ");
    for(let i=0;i<word.length;i++){
        if(word[i].length>longestWord.length){
            longestWord=word[i];
        }
    }
    return longestWord;
}

str="javascript is a programming language";
console.log(longest(str));
