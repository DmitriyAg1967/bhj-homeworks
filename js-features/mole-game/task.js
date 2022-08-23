let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

let win_counter = Number(dead.textContent);
let defeat_counter = Number(lost.textContent);

getHole = index => document.getElementById(`hole${index}`);

for (Index = 1; Index < 10; Index++) {
    let hole = getHole(Index);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole' )) {
            win_counter++;
            dead.textContent = win_counter;
        } else {
            defeat_counter++;
            lost.textContent = defeat_counter;
        }
        if (win_counter == 10) {
            alert ('Вы победили!!!');
            win_counter = 0;
            defeat_counter = 0;
            dead.textContent = defeat_counter;
            lost.textContent = defeat_counter;
        } else if (defeat_counter == 5){
            alert ('Вы потерпели поражение.');
            win_counter = 0;
            defeat_counter = 0;
            dead.textContent = defeat_counter;
            lost.textContent = defeat_counter;
        };
    })
}
