class student{
    display(){
        console.log("Parent Class");
    }
}

class student1 extends student{
    display2(){
        console.log("Child Class");

    }
}
let s=new student()
    s.display();

    let s1=new student1();

    s1.display2();
    s1.display();

