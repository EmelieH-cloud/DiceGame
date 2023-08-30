
let square = document.getElementById('myDiv');
let btnSpin = document.getElementById('roll');


btnSpin.addEventListener('click', animateMySquare); 

let p1 = document.getElementById('one');
let colors = ['blue', 'red', 'green'];

let redClaims =
 ['The color red is considered to be the rarest hair color.', 'Red can cause failure on exams','The color red is a crucial part of Chinese culture',
 'Red is the first color babies can see after black and white', 'Red has the longest wavelength', 'The first red lipsticks were made over 5,000 years ago',
    'The red stripes on the American flag stand for hardiness, valor, and courage', 'Red light has the longest wavelength on the visible color spectrum.',
   'Red hair is the rarest type in the world', 'The most valuable colored diamonds are red diamonds', 'Bulls are actually color-blind',
'Studies show that sports teams wearing red uniforms won more games', 'The Red Cross was founded in 1881', 'Red foxes are the most widespread land mammals on earth',
'Red foxes have excellent hearing can hear rodents digging miles underground', ];

let greenClaims = 
['Green is the second most favorite color with blue being the first.','The wavelength of green light is about 550 nanometers.', 'Green has the most shades of all colors of the spectrum,',
'Green was a sacred color to the Egyptians.', 'Green was also George Washington’s favorite color', 'There is no green pigment in green eyes', 
 'Green is the color used for night-vision goggles.',  ' The lifespan of a green sea turtle is up to 80 years',
   'Adult green turtles grow to 1.5 meters (5 feet) long', 'Like other sea turtles, the green turtle cannot pull its head into its shell.',
   ];

 let blueClaims = 
 ['Less than 1 in 10 plants have blue flowers',' Celts and Germans dyed their faces blue to frighten their enemies','Blue is associated with Christianity', 
 'Blue eyes are caused by a lack of pigment in the iris', 'Blue whales are among the planet’s longest-lived animals.', 
 'Blue whales feast on krill; their stomachs can hold 2,200 pounds (1,000 kilograms)', 'Blue whale calves are the biggest babies on Earth',
  'As a blue whale dives to feed, its giant heart may only beat twice per minute.', 'A blue whale’s tongue alone can weigh as much as an elephant.'];

function animateMySquare(e)
{
    e.preventDefault();
    square.classList.remove('addAnimation');
    square.offsetWidth;
    square.classList.add('addAnimation');
    let index = Math.floor(Math.random() * 3);
    recieveIndex(index);
}

function recieveIndex(randomNumber)
{
    p1.classList.remove('fade-in-text');

    if (colors[randomNumber]=='blue')
    {     
        BlueStatement()

    }
    else if (colors[randomNumber]=='red')
    {
        RedStatement()
    }
    else if (colors[randomNumber]=='green')
    {
       
        GreenStatement()
    }
}

function RedStatement()
{
    void p1.offsetWidth;
    p1.classList.add('fade-in-text');
    let index1 = Math.floor(Math.random() * redClaims.length);
    p1.style.color= "black";
    p1.textContent=redClaims[index1];
    redClaims.splice(index1, 1);

}

function GreenStatement()
{
    void p1.offsetWidth;
    p1.classList.add('fade-in-text');
    let index1 = Math.floor(Math.random() * greenClaims.length);
    p1.style.color="black";
    p1.textContent = greenClaims[index1];
    greenClaims.splice(index1, 1);
  

}
function BlueStatement()
{
    void p1.offsetWidth;
    p1.classList.add('fade-in-text');
    let index1 = Math.floor(Math.random() * blueClaims.length);
    p1.style.color="black";
    p1.textContent = blueClaims[index1];
    blueClaims.splice(index1, 1);
}

function reset()
{
    location.reload();
}





