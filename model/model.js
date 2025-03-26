let allCards = document.querySelectorAll('.card');
let outerModel = document.querySelector('.model__outer');
let outerInner = document.querySelector('.model__inner');
let close = document.querySelector('svg');
let description = document.querySelector('.description').innerHTML;

allCards.forEach(function(card){
    card.addEventListener("click", function(e){
        outerModel.classList.add('open');
        outerModel.classList.add('whenopen');
        outerInner.classList.add('whenopen');
        let imagesrc = card.querySelector('img').src;
        let description = card.querySelector('.description').innerHTML;
        let html = `
        <img src="${imagesrc}">
        <div class="description visible">
                ${description}
            </div>`;
        outerInner.insertAdjacentHTML('afterbegin', html);
    });
});
outerModel.addEventListener("click",function(e){
    outerInner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`;
    if(!e.target.closest('.model__inner')){
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
    }
}); 
close.addEventListener("click", function(){
    outerInner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`;
    if(!e.target.closest('.model__inner')){
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
    }
});
window.addEventListener("keydown", function(e){
    if(e.key=='Escape'){
        outerInner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`;
        outerModel.classList.remove('open');
        outerModel.classList.remove('whenopen');
        outerInner.classList.remove('whenopen');
    }
});