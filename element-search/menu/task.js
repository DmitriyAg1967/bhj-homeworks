let subMenulist = Array.from(document.getElementsByClassName('menu__link'));

for(let i =0; i<subMenulist.length; i++) {
    if(subMenulist[i].closest('li').querySelector('ul')){
       let element = subMenulist[i].closest('li').querySelector('a');
       element.addEventListener('click', subMenuShow);
    }
}

function subMenuShow(e) {
    e.preventDefault();
    this.closest('li').querySelector('ul').classList.toggle("menu_active");
}
