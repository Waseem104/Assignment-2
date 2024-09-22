function countDown(num){
    let count=0;
    for(let i=num;i>0;i--){
        count++;
        console.log(i);
    }
    return `the count is ${count}`;
}
console.log(countDown(12));
