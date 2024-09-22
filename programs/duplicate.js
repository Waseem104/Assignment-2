function duplicate(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count>1 && emptyArr.indexOf(arr[i]) === -1){
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}
arr=[1,2,3,3,4,5,6,6];
console.log(duplicate(arr));
// -------------------------------------------
function isDuplicate(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        let duplicate=false;
        for(let j=0;j<arr.length;j++){
        if(arr[i]===emptyArr[j]){
            duplicate=true;
            break;
        }
    }
        if(!duplicate){
           emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}
arr=[1,2,3,3,4,5,6,6];
console.log(isDuplicate(arr));