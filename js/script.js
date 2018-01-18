"use strict";

function hello(value) {

    if(typeof value !='string')
        return;

    console.log('hello, '+value);
    console.log(`hello, ${value}`);
}


hello("red");
hello(5);


function odd(a, b, reverse=false)
{
    if((typeof a != 'number')
        || (typeof b != 'number') 
        || (typeof reverse != 'boolean'))
            return;

    let increment = 1;
    let startNum = (a<b)? a: b;
    let endNum = (a>b)? a: b;

    if(reverse) 
    {
        increment = -1;
        startNum = (a>b)? a: b;
        endNum = (a<b)? a: b;
    }

    if(!(startNum%2))
        startNum += increment;

    increment = increment*2;

    for(let i=startNum; reverse?i>=endNum:i<=endNum; i+=increment)
    {
            console.log(i);
    }
}

function hello2(value) 
{
    let result;
    switch(value) 
    {
        case 'Jonn':
        case 'Rick':
            result = `Hello my dear ${value}`;
            break;

        case 'Helen':
            result = 'Hi';
            break;

        case 'Don':
            result = 'good Morning';
            break;

            result = 'Hello my dear Rock';
            break;

        default:
            result = 'Hi, User';
    }

    console.log(result);
}