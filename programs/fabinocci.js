function fabnocciNumber(){
    let a=0;
    let b=1;
    let c=0;
    for(let i=0;i<10;i++){
        c=a+b;
        a=b;
        b=c;
        console.log(c);
    }
}
fabnocciNumber();

function fabnocciSeries(num){
    let a=0;
    let b=1;
    // let c=0;
    console.log(a);
    while(b<=num){
        console.log(b);
        let c=a+b;
        a=b;
        b=c;
        // console.log(c);
    }
}
fabnocciSeries(1000);

