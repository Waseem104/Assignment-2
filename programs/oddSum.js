function oddSummation(arr){
    let sum=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%2!==0){
          sum+=arr[i];
        }
    }
    return `the sum of odd numbers of array is ${sum}`;
}
let array=[11,12,13,14,15,16];
console.log(oddSummation(array));
