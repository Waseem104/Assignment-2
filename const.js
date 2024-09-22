const array=["apple","banana","cherry"];

array.push("mango");
console.log(array);

const obj={
    name:"waseem",
    age:30,
    address:"bengaluru"
}

// adding property
obj.job="developer";
console.log(obj);

// even though we can't reassign or redeclare the value of variable declared using 
// const keyword but we can modify the content of the array or object this is 
// const only prevents reassignment to reference of the variable but we can
// modify the internal properties of object or elements of array
