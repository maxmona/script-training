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
    this.toString=()=>"Name - "+this.firstName+" "+this.lastName+", Basic - "+this.basicSalary+", HRA - "+this.hra+", DA - "+this.da+", TA - "+this.ta+", Total Salary - "+this.totalSalary;
}

Employee.prototype.email="irfan.shaheed@fdf.com";
Employee.prototype.getName = function() {   return this.firstName + " " + this.lastName};

var employee1= new Employee("Mona","S",8100);
var employee2= new Employee("Max","P",8000);

employee1.calculateTotalSalary()
employee2.calculateTotalSalary()
console.log("Employee 1 - "+employee1.toString()+" Email = "+employee1.email +" Full Name = "+employee1.getName());
console.log("Employee 2 - "+employee2.toString()+" Email = "+employee2.email +" Full Name = "+employee2.getName());