function falsyValues(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        let present=false;
        if(arr[i]===false || arr[i]===NaN || arr[i]===undefined ||
              arr[i]===0 || arr[i]===null || arr[i]===""){
                 present=true;
              }
              if(present===false){
                emptyArr.push(arr[i]);
              }
    }
    return emptyArr;
}

arr=[1,2,false,true,{},"hello","c",[],NaN,undefined,null,0.,""]
console.log(falsyValues(arr));

function falsyValues1(arr){
    let emptyArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
           emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}
console.log(falsyValues1(arr));

// console.log(Boolean(NaN));
