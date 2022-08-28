const MODAL_MAIN = document.getElementById('modal_main');
const MODAL_SUCCESS = document.getElementById('modal_success');
const BTN_SUCCESS =document.getElementsByClassName('btn_danger')[0];
const BTN_CLOSE = Array.from(document.getElementsByClassName('modal__close_times'));

function modalMainActive(){
    MODAL_MAIN.classList.add('modal_active');
}

function btnClick() {
    MODAL_MAIN.classList.remove('modal_active');
    MODAL_SUCCESS.classList.add('modal_active');
}

function formClose() {
    this.closest('div.modal').classList.remove('modal_active');
}

document.addEventListener('DOMContentLoaded', modalMainActive);
BTN_SUCCESS.addEventListener('click', btnClick);
for (let i = 0; i < BTN_CLOSE.length; i++) {
    const element = BTN_CLOSE[i];
    element.addEventListener('click', formClose);
}