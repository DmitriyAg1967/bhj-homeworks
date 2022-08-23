let clicker = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let count = Number(clicker.textContent)

cookie.onclick = () => {
    count = count + 1;
    if (count % 2 !== 0) {
        cookie.width += 20;
        clicker__counter.textContent = String(count);
    } else {
        cookie.width -= 20;
        clicker__counter.textContent = String(count);
    }
};