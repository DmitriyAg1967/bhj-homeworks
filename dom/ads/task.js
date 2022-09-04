const ALL_ROTATOR = Array.from(document.querySelectorAll('.rotator__case'))
let i = 0;

function viciousCircle() {

    if (ALL_ROTATOR[i].className !== 'rotator__case_active') {
        ALL_ROTATOR[i].classList.remove('rotator__case_active');
        if (i < (ALL_ROTATOR.length - 1)) {
            ALL_ROTATOR[0].classList.remove('rotator__case_active');
            ALL_ROTATOR[i + 1].classList.add('rotator__case_active');
        } else if (i === (parseInt(ALL_ROTATOR.length) - 1)) {
            i = -1;
            ALL_ROTATOR[0].classList.add('rotator__case_active');
        }
    }
    i++;
}
setInterval(viciousCircle, 1000);