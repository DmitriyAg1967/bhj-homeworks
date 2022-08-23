const seconds = document.getElementById('timer');
let timerId = setInterval(() =>{
    seconds.textContent = Number(seconds.textContent)-1;
    if(Number(seconds.textContent) === 0){
        alert ('Вы победили в конкурсе');
        clearInterval(timerId);
    }
}, 1000);