function trianglePattren(rows){
    for(let i=1;i<rows;i++){
        let num="";
        for(let j=1;j<=i;j++){ 
            num+=j; 
        }
        console.log(num);
        
    }
}
trianglePattren(5);

// // iteration
// i=0 j=0
// 0<=0 //true
// 0

// i=1,j=0
// 0<=1  //true
// 0

// i=1 j=1
// 1<=1  //true
// 01


function numberTriangle1(rows){
    for(let i=1;i<=rows;i++){
        let num="";
        for(let j=1;j<=i;j++){
            num+=i;  
        }
        console.log(num);
        
    }
}
numberTriangle1(5);
