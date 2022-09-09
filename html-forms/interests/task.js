const check =Array.from (document.querySelectorAll('.interest__check'));

function checkboxActiv(){
    if (this.closest('ul.interests') === null & this.checked === true) {
        const check = Array.from(this.closest('.interest').querySelectorAll('.interest__check'));
        for (let i = 0; i < check.length; i++) {
            check[i].checked = true;
        }
    } else if (this.closest('ul.interests') === null & this.checked === false) {
        const check = Array.from(this.closest('.interest').querySelectorAll('.interest__check'));
        for (let i = 0; i < check.length; i++) {
            check[i].checked = false;
        }
    }
}

for (let i = 0; i < check.length; i++) {
    const checkBoxEl = check[i];
    checkBoxEl.onchange = checkboxActiv;
}
