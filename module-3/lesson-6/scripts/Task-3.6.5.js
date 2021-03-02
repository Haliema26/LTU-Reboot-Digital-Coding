let userInput = document.querySelector ('input');


let button = document.querySelectorAll('button');

button.addEventlistener('click', function( event){
    alert(userInput);
});