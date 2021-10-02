function receivesAFunction(spy)
{
    return spy();
}

let spy = function()
{
    //
}

// let fun1 = returnsANamedFunction()

function returnsAnAnonymousFunction(digit1, digit2)
{
    return function()
    {
        let add = num1 + num2

        return add;
    }
}

let number1 = 30, number2 = 20;
let int1 = returnsAnAnonymousFunction(number1, number2)

function returnsANamedFunction(){
    let fun1 = function fun(){
        console.log('Fun!')
    };
    
    return fun1;
}