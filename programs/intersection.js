let array1=[1,2,3,4,5,6];
let array2=[2,4,6,8,10,12];

function intersectionOfArray(arr1,arr2){
    let emptyArr=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                emptyArr.push(arr1[i]);
            }
        }
    }
    return emptyArr;
}
console.log(intersectionOfArray(array1,array2));
