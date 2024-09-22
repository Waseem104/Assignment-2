function secondLargest(arr){
    let secondMaximum=arr[0];
    let maximum=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maximum){maximum
            secondMaximum=maximum;
            maximum=arr[i];
        }else if(arr[i]>secondMaximum && arr[i]!=maximum){
               secondMaximum=arr[i];
        }
    }
    return secondMaximum;
}
let array = [10, 5, 20, 8, 12];
console.log(secondLargest(array));
