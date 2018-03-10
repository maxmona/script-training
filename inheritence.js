function Employee (firstName, lastName, basicSalary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.basicSalary=basicSalary;    
    this.totalSalary=0;    
    this.fullName=()=> this.firstName+" "+this.lastName;
    this.calculateTotalSalary=()=>{
        this.totalSalary=this.basicSalary;
        return this.totalSalary;
    }
    this.toString=()=>"Name - "+this.firstName+" "+this.lastName+", Basic - "+this.basicSalary+", HRA - "+this.hra+", DA - "+this.da+", TA - "+this.ta+", Total Salary - "+this.totalSalary;
}

function PEmployee(firstName,lastName,basicSalary){   
    this.hra=0;
    this.da=0;
    this.ta=0;
    Employee.call(this,firstName,lastName,basicSalary);
    this.calculateTotalSalary=()=>{
        this.hrs=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*5/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
}

var pemployee= new PEmployee("Max","P",8000);

console.log("Employee P - "+pemployee.calculateTotalSalary()+" Full  name - "+pemployee.fullName());

//protype values need to reassigned after inheritence