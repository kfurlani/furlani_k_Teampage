(() => {
// this doesn't work
//const theButtons = document.querySelectorAll('.buttons ')
 //     theImages = document.querySelector('#team')


//function changeImages (){
    //let key = this.dataset.bgref;
    //console.log(key);

   // theImages.style.right = `url(images/me_${key}.jpg)`;
//}


//theButtons.forEach(button => button.addEventListener('click', changeImages));

const theImages = document.querySelector('#team'),
      desBttn = document.getElementById('#des'),
      devBttn = document.getAnimations('#dev');

const teamData = [
    `Krystal our designer studies interactive Media Design, in her free time she likes to hangout with our Developer Neo. `, 

    `Neo our developer is a cat. This is probably why we are having a hard time with the javascript!`
]


//function changeImg(){
    //theImages.style.right = `${this.dataset.offset * 500}px`;} 

    //function changeImg(){
        //theImages.style.right = `url(images/me${key}.jpg`;} doesn't work 
    

    
   // desBttn.addEventListener('click', changeImg); this is not right.. 

    function changeToDes (){
        theDesBttn = document.querySelector(`url(images/me${key}.jpg`);}

    

    desBttn.addEventListener('click', changeToDes);



})();