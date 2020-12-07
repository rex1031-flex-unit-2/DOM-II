// Your code goes here



//Mouseover Event for the Logo
const headingLogo = document.querySelector('.logo-heading');

headingLogo.addEventListener('mouseover', (e) =>{
    headingLogo.style.color = 'yellow';
    headingLogo.style.fontSize = '5rem';
    headingLogo.style.backgroundColor = 'red';
    e.stopPropagation();
});

//Mouseleave Event for the Logo

headingLogo.addEventListener('mouseleave', (e) =>{
    headingLogo.style.color = 'black';
    headingLogo.style.fontSize = '2em';
    headingLogo.style.backgroundColor = 'white';
    e.stopPropagation();
});

//Click Event for the bus image.

const busImage = document.querySelector('header img');


busImage.addEventListener('click', () =>{
    busImage.src = 'https://cdn.pixabay.com/photo/2017/08/05/12/47/auto-2583303_960_720.jpg';
    busImage.alt = 'bus on the rocks';

});

//Double Click event

const header1 = document.querySelector('.intro');


header1.addEventListener('dblclick', () =>{
    header1.style.backgroundColor ='seagreen';
    header1.style.color = 'white';

});

header1.addEventListener('click', (e) => {
    header1.style.backgroundColor = "white";
    header1.style.color = 'black';
    e.stopPropagation();
});


// Resize Event
const body = document.querySelector('body');

window.addEventListener('resize', (e) => {
    body.style.backgroundColor = 'white';
    e.stopPropagation();
});

//Scroll Event
window.addEventListener('scroll', (e) =>{
    body.style.backgroundColor = 'skyblue';
   e.stopPropagation();
});

//mousedown event


