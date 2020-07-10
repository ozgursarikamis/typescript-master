function myFunction() {
    console.log('myFunction', this);
}

myFunction();

const myObj = {
    myMethod: function myMethod() {
        console.log('Object :>> ', this);
    }
};

myObj.myMethod();

class MyClass {
    name: string;
    myMethod() {
        console.log('class :>>', this);
    }
}

new MyClass().myMethod();