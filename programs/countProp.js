function countProperty(obj){
    let count=0;
    for(let prop in obj){
        count++;
    }
    return count;
}

let people={
    name:"waseem",
    age:31,
    address:"bengaluru",
    job:"developer"
}
console.log(countProperty(people));
