const ALL_REVEAL = document.querySelectorAll('.reveal');

function visibleElement() {
    for (let i = 0; i < ALL_REVEAL.length; i++) {
        element = ALL_REVEAL[i];
        let top = element.getBoundingClientRect().top;
        let bottom = element.getBoundingClientRect().bottom;
        if (top > 0 && bottom < window.innerHeight) {
            element.classList.add('reveal_active');
        } else { element.classList.remove('reveal_active')}
    }
}
document.addEventListener('scroll', visibleElement);