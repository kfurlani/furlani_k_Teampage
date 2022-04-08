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

const theImages = document.querySelector('#team');



function changeImg(){
    theImages.style.right = `${this.dataset.offset * 500}px`;
}







})();