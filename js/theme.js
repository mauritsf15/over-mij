// theme.js

let theme = localStorage.getItem('theme');

if (theme) {
    document.querySelector('html').dataset.theme = theme;
}