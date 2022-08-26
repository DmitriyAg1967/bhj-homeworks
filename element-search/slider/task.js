const slide_show = document.querySelectorAll('.slider__item');
const right = document.querySelector('.slider__arrow_next');
const left = document.querySelector('.slider__arrow_prev');

let slide_number = 0;

right.onclick = function right_click () {
    slide_number++;
    for( let slide of Array.from(slide_show)){
        slide.className ='slider__item';
    }
    if(slide_number >= slide_show.length){
        slide_number=0;
    }
    slide_show[slide_number].className='slider__item slider__item_active';
};

left.onclick = function left_click () {
    slide_number--;
    for( let slide of Array.from(slide_show)){
        slide.className ='slider__item';
    }
    if(slide_number < 0){
        slide_number = slide_show.length-1;
    }
    slide_show[slide_number].className='slider__item slider__item_active';
};
