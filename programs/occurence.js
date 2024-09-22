function occurenceCount(str){
    let emptyObj={};
    for(let i=0;i<str.length;i++){
        let element =str[i];
        if(emptyObj[element]){
            emptyObj[element]++;
        }else{
            emptyObj[element]=1;
        }
    }
    return emptyObj;
}

str="hello world";
console.log(occurenceCount(str));
