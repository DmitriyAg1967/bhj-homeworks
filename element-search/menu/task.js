let sub_Menu_list = Array.from(document.getElementsByClassName('menu__link'));
console.log(sub_Menu_list)

for(let i =0; i<sub_Menu_list.length; i++) {
    if(sub_Menu_list[i].closest('li').querySelector('ul')){
       let element = sub_Menu_list[i].closest('li').querySelector('a');
       element.addEventListener('click', sub_Menu_show);
    }
}

function sub_Menu_show(e) {
    e.preventDefault();
    this.closest('li').querySelector('ul').classList.toggle("menu_active");
}
