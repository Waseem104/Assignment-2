function secondSmallest(arr){
    let secondMinimum=arr[0];
    let minimum=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minimum){
            secondMinimum=minimum;
            minimum=arr[i];
        }else if(arr[i]<secondMinimum && arr[i]!=minimum)
            secondMinimum=arr[i];
        }
    return secondMinimum;
}

array=[90,5,80,40,19,36];
console.log(secondSmallest(array));
