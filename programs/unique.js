function uniqueElements(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        let isUnique=true;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==emptyArr[j]){
                isUnique=false;
                break;
            }
        }
        if(isUnique){
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}
let arr=[1,2,3,2,3,4,5,5,6];
console.log(uniqueElements(arr));

// ----------------------------------------------------------------------------------------
// let arr2=[1,2,3];
// let empty=[];
// console.log(arr2[0]==empty[0]);

function appearedOnce(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count===1){
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}
console.log(appearedOnce(arr));
