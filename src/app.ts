const myObj = {
    myMethod: function myMethod() {
        console.log('Object :>> ', this);
    }
};

// myObj.myMethod();

class MyClass {
    name: string;
    myMethod() {
        console.log('class :>>', this);
    }
}

// new MyClass().myMethod();

function myFunction(text: string, arg2: string) {
    console.log('function :>', this, text, arg2);
}

myFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF');
myFunction.call([]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call


const m = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = m.getX;
console.log('unboundGetX()', unboundGetX());