function factorial(num){
    let fact=1;
    for(i=num;i>0;i--){
        fact*=i;
    }
    return fact;
}

console.log(factorial(5));
