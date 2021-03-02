let googleLink = document.querySelector('a');


 googleLink.addEventlistener('click', function(event){

     event.preventDefault();

     alert('this link is disabled')
     console.log(event);
 });