let keys = [...document.querySelectorAll("#button")];
let keycodeList = keys.map(touche => touche.dataset.key);
let screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    let value = e.keyCode.toString();
    calcul(value);
})

document.addEventListener('click', (e) => {
    let value = e.target.dataset.key;
    calcul(value);
})

const calcul = (value) => {
    if(keycodeList.includes(value)) {
        switch(value) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                let calculate = eval(screen.textContent);
                screen.textContent = calculate;
                break;
            default:
                let indexKeycode = keycodeList.indexOf(value);
                let touche = keys[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert("Une erreur est survenue dans le calcul : "+e.message);
})