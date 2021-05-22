"use strict"
//array
let options=
[
    {question: "1Enter any one Javascript function.Case sensitive?",
     answer:"push,pop"},

     {question: "Enter any one Javascript function?",
     answer:"push,pop"}
]
//object
let options1=
{
    question: "1Enter any one Javascript function?",
     answer:"push,pop"
}
let options3=[{name:"push",},{name:"pop",},{name:"find",}];

function determineArray(){
//3 mthods to determine if an Object is array or not
    console.log(options[1].question);
    console.log(Array.isArray(options));
    console.log(Array.isArray(options1));
    console.log(options instanceof Array);
    console.log(options1 instanceof Array);
    console.log(options.length);
    console.log(options1.length);
}
determineArray();

//running fine
/*
let userInput=prompt("Enter JS array function");
console.log(userInput);

 console.log(options3.find(loadQuestion));

if(options3.find(loadQuestion)===undefined)
{
    console.log("Not a JS array function");
}else{
let isJSArrayfunction=options3.find(loadQuestion).name;


console.log("You rocked it "+isJSArrayfunction+ " is a JS function");
}
function loadQuestion(op3)
{
// if(userInput==="push"||userInput==="pop")
if(op3.name===userInput)
return op3.name;//op3.name===userInput;
else return 0;
} */

//loadQuestion();

//The best
/* let options4=["push","pop","find"];


if(options4.find(loadQuestion1)===undefined)
{
    console.log("Not a JS array function");
}else{
let isJSArrayfunction=options3.find(loadQuestion1);


console.log("You rocked it "+isJSArrayfunction+ " is a JS function");
}
function loadQuestion1(op4)
{
// if(userInput==="push"||userInput==="pop")
if(op4===userInput)
return op4;//op3.name===userInput;
else return 0;
} */
/*
let str="hello.txt";
console.log(str.slice(str.lastIndexOf(".")));

let str1=["hello","txt i am"];
console.log(str1.join());

//22.02
{
    let product_1={
        name:"Shivas Regal",
        price:29.99,
        category:"Office drinks"
    };
    let product_2={};
    product_2.name:"Ram Regal";
        product_2.price:24.99;
        product_2.category:"Office drinks";

        let product_3={};
        product_3["name"]="Taliskar";
        product_3.price:29.99;
        product_3.category:"Home drinks";
 
}
*/
//Objekt mit Konstruktor funktion

let myNewBook=new Object();//leeres Objeckt
console.log(myNewBook);

{
//Objekt-Funktionen
let customer={
    lastName:"Jones",
    firstName:"Jessica",
    age:"35",
    Address:"leostraß2 12"
}
//Method Keys vom Object-Objekt
console.log(Object.keys(customer));

/* 
console.log(Object.values(customer));

let myKeys=Object.keys(customer);

for(let i=0;i<myKeys.length;i++)
{
    console.log(myKeys[i]+" :"+customer[myKeys[i]]);
}

let JahrZeiten=["Frühling","Somm","Herbst","Winter"];
for(let index in JahrZeiten)
console.log(index+":"+ JahrZeiten[index]);


let Object={a:1,b:2,c:3};

for(let key in myObjekt)
{
    console.log(key+":"+myObjekt[i]);
} */
}

let heute=new Date();
console.log(heute);

console.log(heute.getDate());
console.log(heute.getMonth());

let dateUTC=new Date();

dateUTC.setUTCFullYear(2022);

let a="Hallo";

console.log(typeof(a));
console.log(typeof(JSON.stringify(a)));

//cookies
document.cookie="user=Jessica";//avaialable in entire domain

document.cookie="acceptance=1";


//document.cookie="user=Jessica Jones;path=/js";//avaialable in JS folder

document.cookie="user=Jessica Jones;max-age=86400;path=/js";







