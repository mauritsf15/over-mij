// preload.js

const preloadTheme = localStorage.getItem('theme');

if (preloadTheme === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'white');
    }
}