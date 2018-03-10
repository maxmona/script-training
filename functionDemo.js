// Normal JS function 
function calIntrest1(baseAmt,interestrate){
    return (baseAmt*interestrate)/100;
}

console.log("Intrest 1 - >",calIntrest1(5000,10));

//Function as variable
var calIntrest2=function calIntrest1(baseAmt,interestrate){
    return (baseAmt*interestrate)/100;
}

console.log("interest 2 => "+calIntrest2(5000,10));

//Lamda or Fat arrow function in JS
var calIntrest3=(baseAmt,interestrate)=>{
    return (baseAmt*interestrate)/100;
}
console.log("interest 3 => "+calIntrest3(5000,10));

//Fat arrow in a single line if it contains not more than one line of code.
var calIntrest4=(baseAmt,interestrate)=>(baseAmt*interestrate)/100;

console.log("interest 4 => "+calIntrest4(5000,10));