function Employee (firstName, lastName, basicSalary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.basicSalary=basicSalary;
    this.hra=0;
    this.da=0;
    this.ta=0;
    this.totalSalary=0;
    // this is a closure function
    /*A closure is an inner function that has access to the outer (enclosing) function’s variables—scope 
    chain. The closure has three scope chains: it has access to its own scope (variables defined between 
    its curly brackets), it has access to the outer function’s variables, and it has access to the 
    global variables.*/
    this.calculateTotalSalary=()=>{
        this.hrs=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*5/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
    this.toString=()=>this.firstName+" "+this.lastName+" "+this.basicSalary+" "+this.hra+" "+this.hra+" "+this.da+" "+this.ta+" "+this.totalSalary;
}

var employee1= new Employee("Mona","S",8100);
var employee2= new Employee("Max","P",8000);

console.log(employee1.calculateTotalSalary());
console.log(employee2.calculateTotalSalary());