function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let array=[1,2,3,4,5,6,];
console.log(arraySum(array));
console.log(arraySum([10,40,18,43]));

