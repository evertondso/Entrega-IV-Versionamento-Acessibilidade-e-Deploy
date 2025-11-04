import { initSPA } from './spa.js';

import { setupThemeToggle } from './tema.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    const app = document.getElementById('app-container');
    if (!app) return console.error('Elemento #app-container não encontrado.');

    app.innerHTML = '<p class="loading">Carregando...</p>';

    initSPA();
    setupThemeToggle(); 
    console.log('Theme toggle initialized');
  } catch (err) {
    console.error('Erro ao inicializar SPA:', err);
    document.body.insertAdjacentHTML('beforeend', '<p style="color:red">Erro ao carregar conteúdo. Veja console.</p>');
  }
});

