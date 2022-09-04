const ALL_SIZES = Array.from(document.querySelectorAll('.font-size'));

function onClickFonts(event) {

    event.preventDefault();
    let activeFonts = this.closest('div.book__control').querySelector('a.font-size_active');
    activeFonts.classList.remove('font-size_active');
    this.classList.add('font-size_active');
    let dataAttribut = this.getAttribute("data-size");
    if (dataAttribut === "small") {
        this.closest('div.book').className = "book book_fs-small";
    } else if (dataAttribut === "big") {
        this.closest('div.book').className = "book book_fs-big";
    } else {
        this.closest('div.book').className = "book";
    }

}

for (let i = 0; i < ALL_SIZES.length; i++) {
    const fontElemSise = ALL_SIZES[i];
    fontElemSise.addEventListener('click', onClickFonts)
}
