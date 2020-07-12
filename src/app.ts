class MyClass {
    myMethod() {
        const foo = 123;
        console.log('1', this);
        setTimeout(() => {
            // lexical scope
            console.log(this); // --> MyClass. Doesn't create scope change 
        }, 0);
        setTimeout(function() {
            console.log(this); // --> Window
        }, 0);
    }
    foo(){
        const foo = 456;
        console.log('foo', foo);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();