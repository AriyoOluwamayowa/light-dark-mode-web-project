const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const taxtBox = document.getElementById('text-box');



// dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    taxtBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'bracelet_dark.jpg';
    image2.src = 'waistbead_dark.jpg';
    image3.src = 'neckpiece_dark.jpg';
}

// light mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    taxtBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'bracelet_light.jpg';
    image2.src = 'waistbead_light.jpg';
    image3.src = 'neckpiece_light.jpg';
    
}

// switch theme dynamivally
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
         lightMode();
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

