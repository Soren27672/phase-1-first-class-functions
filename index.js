const add = (n1,n2) => n1+n2;
const sub = (n1,n2) => n1-n2;
const div = (n1,n2) => n1/n2;
const mul = (n1,n2) => n1*n2;

function receivesAFunction(cb,num1,num2) {
    cb(num1,num2);
    return 'Nice shot buddy, try better next time MWAHAHAHA'
}

function returnsANamedFunction() {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => (() => console.log("Wait! NOOO!"));