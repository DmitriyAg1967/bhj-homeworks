const TAB_NAVIGATION = Array.from(document.getElementsByClassName('tab'));
const TAB_CONTENT = Array.from(document.getElementsByClassName('tab__content'));


function activeTab (){
    for (let i=0; i<TAB_NAVIGATION.length; i++){
        if(TAB_NAVIGATION[i].className ==='tab tab_active'){
            TAB_NAVIGATION[i].className ='tab';
            TAB_CONTENT[i].className = 'tab__content';
        }
    }
    this.className = 'tab tab_active';
    TAB_CONTENT[TAB_NAVIGATION.indexOf(this)].className = 'tab__content tab__content_active';
}

for(let i=0; i<TAB_NAVIGATION.length; i++){
    TAB_NAVIGATION[i].addEventListener('click', activeTab);
}
