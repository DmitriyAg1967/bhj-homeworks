const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');
const btn_success =document.getElementsByClassName('btn_danger')[0];
const btn_close = Array.from(document.getElementsByClassName('modal__close_times'));

function modal_Main_active(){
    modal_main.classList.add('modal_active');
}

function Btn_click() {
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
}

function Form_close() {
    this.closest('div.modal').classList.remove('modal_active');
}

document.addEventListener('DOMContentLoaded', modal_Main_active);
btn_success.addEventListener('click', Btn_click);
for (let i = 0; i < btn_close.length; i++) {
    const element = btn_close[i];
    element.addEventListener('click', Form_close);
}