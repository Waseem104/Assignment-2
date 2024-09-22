function maximumAndMininum(arr){
   let max=arr[0];
   let min=arr[0];
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
   }
   return `maximum number is ${max} and minimum number is ${min}`;
}
let array=[28,65,49,99,12,-1,0]
console.log(maximumAndMininum(array));
