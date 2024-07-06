import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import './style.css';

function removeContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', () => {
    removeContent();
    loadHome();
});

menuBtn.addEventListener('click', () => {
    removeContent();
    loadMenu();
});

aboutBtn.addEventListener('click', () => {
    removeContent();
    loadAbout();
});
