let domdiv = document.querySelector('#dom-div');

let paragraph = document.createElement('p');
   

let pragraphText = document.createTextNode('Text created by DOM');

pragraphText.appendChild(pragraphText);

domdiv.appendChild(paragraph);
