let menuBut = document.querySelector('#menu-button');
let divContainer = document.querySelector('.menu-container');
let closeBut = document.querySelector('#close-btn')

function showMenu(){
    divContainer.id = 'show-menu';
    console.log(divContainer);
    return divContainer;
}

menuBut.addEventListener('click',showMenu);


function closeMenu(){
    divContainer.id = "";
    console.log(divContainer)
    return divContainer;
}

closeBut.addEventListener('click',closeMenu);