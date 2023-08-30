
let square = document.getElementById('myDiv');
let btnSpin = document.getElementById('roll');
let score = document.getElementById('choose');


btnSpin.addEventListener('click', animateMySquare); 
btnSpin.addEventListener('click', checkResponse);
let turns =0;

let p1 = document.getElementById('one');
let colors = ['blue', 'red', 'green'];

let redClaims =
 ['The color red is considered to be the rarest hair color.', 'Red can cause failure on exams','The color red is a crucial part of Chinese culture',
 'Red is the first color babies can see after black and white', 'Red has the longest wavelength', 'The first red lipsticks were made over 5,000 years ago',
    'The red stripes on the American flag stand for hardiness, valor, and courage', 'Red light has the longest wavelength on the visible color spectrum.',
   'Red hair is the rarest type in the world', 'The most valuable colored diamonds are red diamonds', 'Bulls are actually color-blind',
'Studies show that sports teams wearing red uniforms won more games', 'The Red Cross was founded in 1881', 'Red foxes are the most widespread land mammals on earth',
'Red foxes have excellent hearing can hear rodents digging miles underground', 'Red means WALK in indonesian traffic lights'];

let greenClaims = 
['Green is the second most favorite color with blue being the first.','The wavelength of green light is about 550 nanometers.', 'Green has the most shades of all colors of the spectrum,',
'Green was a sacred color to the Egyptians.', 'Green was also George Washington’s favorite color', 'There is no green pigment in green eyes', 
 'Green is the color used for night-vision goggles.', 'Cats are more drawn to green objects', ' The lifespan of a green sea turtle is up to 80 years',
   'Adult green turtles grow to 1.5 meters (5 feet) long', 'Like other sea turtles, the green turtle cannot pull its head into its shell.',
   ];

 let blueClaims = 
 ['Less than 1 in 10 plants have blue flowers',' Celts and Germans dyed their faces blue to frighten their enemies','Blue is associated with Christianity', 
'Blue light has been shown to have a negative impact on sleep quality', 'Blue eyes are caused by a lack of pigment in the iris',
'Baby bats are only able to percieve blue for the first few weeks of their life', 'Blue is considered a non-color by color experts'];

function animateMySquare()
{
    square.classList.add('addAnimation');
    let index = Math.floor(Math.random() * 3) + 1;
    btnSpin.textContent='True!'; 
    recieveIndex(index);
}

function recieveIndex(randomNumber)
{
    if (colors[randomNumber]=='blue' && turns<10)
    {     
        BlueStatement()

    }
    else if (colors[randomNumber]=='red' && turns<10)
    {
        RedStatement()
    }
    else if (colors[randomNumber]=='green'&& turns<10)
    {
        GreenStatement()
    }
    else if(turns==10)
    {
        score.textContent='Thats 10 rounds!';
        turns=0;
    }
}

function RedStatement()
{
    let index1 = Math.floor(Math.random() * 12) + 1;
    p1.classList.add('fade-in-text');
    p1.style.color= "black";
    p1.textContent=redClaims[index1];
    checkResponse()
}


function GreenStatement()
{
    let index1 = Math.floor(Math.random() * 12) + 1;
    p1.classList.add('fade-in-text');
    p1.style.color="black";
    p1.textContent = greenClaims[index1];
    checkResponse()
}

function BlueStatement()
{
    let index1 = Math.floor(Math.random() * 12) + 1;
    p1.classList.add('fade-in-text');
    p1.style.color="black";
    p1.textContent = blueClaims[index1];
    checkResponse()
}

function checkResponse(e)
{
  while(e.target.matches('button') && turns<=9 && (p1.textContent!=blueClaims[6] || p1.textContent!=blueClaims[3]))
  {
     turns++; 
     score.textContent=turns; 
     let index = Math.floor(Math.random() * 3) + 1;
     recieveIndex(index)
  }

}

function reset()
{
    location.reload();
}





