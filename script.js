
let diceResult = 0;
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let header = document.getElementById("header");

let btn1 = document.getElementById("first");
let btn2 = document.getElementById("scnd");
let btn3 = document.getElementById("thrd");
let btn4 = document.getElementById("frth");

btn1.addEventListener('click', RedInput, blueInput, greenInput);
btn2.addEventListener('click', RedInput, blueInput, greenInput);
btn3.addEventListener('click', RedInput, blueInput, greenInput);
btn4.addEventListener('click', RedInput, blueInput, greenInput);

function animateMySquare() 
{
    header.textContent="";
    let square = document.getElementById("myDiv");
    square.classList.add("AnimateSquare");
    let instruction = document.getElementById("instruction");
    instruction.classList.add("fadeInstruction");

    diceResult = Math.floor(Math.random() * 3) + 1;

    if (diceResult==1)
    {
        square.classList.add("red");
        RedGame()
    }
    else if (diceResult==2)
    {
        square.classList.add("blue");
        blueGame()
    }
    else if (diceResult==3)
    {
        square.classList.add("green");
        greenGame()
    }
 }


function reset()
{
    location.reload();
}


 function RedGame()
 {
   
    one.textContent = "1. Red pandas are more closely related to skunks, weasels, and raccoons than they are to giant pandas.";
    two.textContent="2. Red is the first primary color babies see";
    three.textContent="3. Red makes things appear closer than they really are";
    four.textContent= "4. The majority of insects percieve the world in only red.";
    RedInput()
 }

 function blueGame()
 {
    one.textContent = "1. Just 8% of the worlds population have blue eyes.";
    two.textContent="2. Blue is said to encourage productivity and creative problem solving";
    three.textContent="3. Historically, blue was one of the most expensive pigments for painters";
    four.textContent= "4. Exposure to color blue is proven to reduce agression in some animals.";
    blueInput();
 }

 function greenGame()
 {
    one.textContent = "1. In Ireland, 40% of people have green eyes";
    two.textContent="2. Fire escape exit signs are by law green in all countries";
    three.textContent="3. Suicides dropped when Londons Blackfriar Bridge was painted green";
    four.textContent= "4. The color green is often used as a symbol of sickness";
    greenInput()
 }

 function RedInput(e)
 {
    const button = e.target;
    const action = button.dataset.action;
    if (e.target.matches('button') && action!='four')
    {
        alert("nope, thats true!");
    }
    else
    {
        alert("yeah, that one is false!");
    }
}

function blueInput(e)
{
   const button = e.target;
    const action = button.dataset.action;
   if (e.target.matches('button') && action!='four')
   {
       alert("nope, thats true!");
   }
   else
   {
       alert("yeah, that one is false!");
   }
}

function greenInput(e)
{
    const button = e.target;
    const action = button.dataset.action; 
   if (e.target.matches('button') && action!='one')
   {
       alert("nope, thats true!");
   }
   else
   {
       alert("yeah, that one is false!");
   }
}



