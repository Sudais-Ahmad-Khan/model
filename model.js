let allCards = document.querySelectorAll('.card');
let outerModel = document.querySelector('.model__outer');
let outerInner = document.querySelector('.model__inner');
let description = document.querySelector('.description').innerHTML;
let closeIcon = document.querySelector('svg');

allCards.forEach(function(card){
    card.addEventListener("click", function(e){
        outerModel.classList.add('open');
        outerModel.classList.add('whenopen');
        outerInner.classList.add('whenopen');
        let imagesrc = card.querySelector('img').src;
        let description = card.querySelector('.description').innerHTML;
        let html = `
        <img src="${imagesrc}">
        <div class="description visible open">
                ${description}
            </div>`;
        outerInner.insertAdjacentHTML('afterbegin', html);
    });
});
outerModel.addEventListener("click", function(e){
    if(!e.target.closest('.model__inner')){
        outerInner.firstElementChild.nextElementSibling.remove();
        outerInner.firstElementChild.remove();
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
    }
}); 
closeIcon.addEventListener("click", function(){
        outerInner.firstElementChild.nextElementSibling.remove();
        outerInner.firstElementChild.remove();
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
});
window.addEventListener("keydown", function(e){
    if(e.key=='Escape'){
        outerInner.firstElementChild.nextElementSibling.remove();
        outerInner.firstElementChild.remove();
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
    }
});
