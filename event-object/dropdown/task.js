const DROPDOWN_LIST_ALL = document.getElementsByClassName('dropdown__value');
const DROPDOWN_LIST = Array.from(DROPDOWN_LIST_ALL);
const DROPDOWN_ITEM = Array.from(document.getElementsByClassName('dropdown__item'));

function dropList (){
    let clickDrop = Array.from(document.getElementsByClassName('dropdown__list'));
    if(clickDrop[0].className === 'dropdown__list'){
        clickDrop[0].className = 'dropdown__list dropdown__list_active';
    } else {
        clickDrop[0].className = 'dropdown__list';
    }
    return(false);
}

function clickItem(event){
    let selectItem = Array.from(document.getElementsByClassName('dropdown__value'));
    selectItem[0].textContent = this.textContent;
    event.preventDefault();
    dropList();
}

DROPDOWN_LIST[0].addEventListener('click', dropList);

for(let i=0; i<DROPDOWN_ITEM.length; i++){
    DROPDOWN_ITEM[i].addEventListener('click', clickItem);
}