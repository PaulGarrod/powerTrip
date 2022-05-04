function showHideEv() {
    let ev = document.getElementById("ev");
    let car = document.getElementById("car");
    let eco = document.getElementById("eco");
    if (ev.style.display == 'none'){
        ev.style.display = 'block';
        car.style.display = 'none';
        eco.style.display = 'none';
    } else {
        ev.style.display = 'none'
    }
};

function showHideCar() {
    let ev = document.getElementById("ev");
    let car = document.getElementById("car");
    let eco = document.getElementById("eco");
    if (car.style.display == 'none'){
        car.style.display = 'block';
        ev.style.display = 'none';
        eco.style.display = 'none';
    } else {
        car.style.display = 'none'
    }
};

function showHideEco() {
    let ev = document.getElementById("ev");
    let car = document.getElementById("car");
    let eco = document.getElementById("eco");
    if (eco.style.display == 'none'){
        eco.style.display = 'block';
        car.style.display = 'none';
        ev.style.display = 'none';
    } else {
        eco.style.display = 'none'
    }
};


const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})