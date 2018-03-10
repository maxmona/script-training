
var numList=[10,20,30,40,50,60,70,80,90,100];
var list=[10,15,"heyyy",12.50];

// For loop
for(i=0;i<numList.length;i++){
    console.log(numList[i])
}

//for in loop

for (let a in numList){
    console.log(numList[a])
    }
//for each loop    
// impt- Fat arrow function is being used here.
// we are passing whole function to forEach.
numList.forEach(element=>{
    console.log(element)
    });

//for each for single line of code 
numList.forEach(element=>console.log(element));