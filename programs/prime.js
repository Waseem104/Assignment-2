function isPrime(num){
    let prime=true;
    if(num<=1){
        prime=false;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            prime=false;
        }
        
    }
    if(prime){
    return  `${num} is a prime number`;
    }else{
        return `${num} is not a prime number`;
    }
}
console.log(isPrime(31));
