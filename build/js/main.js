const nav = document.querySelector('.navLink');

function onToggle(e) {
    if (e.name === "menu-outline") {
        e.name = "close-outline";
        nav.classList.add('animate-open-menu');
        nav.classList.remove('hidden');
    } else {
        e.name = "menu-outline";
        nav.classList.add('hidden');
    }
}