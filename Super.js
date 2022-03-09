class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("Parent Class:",this.name);
    }
}

class student1 extends student{
    constructor(name,RollNo){
        super(name);
        this.RollNo=RollNo;
    }
    display(){
    super.display();
    console.log("child Class"+this.name+" "+this.RollNo);
}
}

let s=new student1("ab",123);
s.display();