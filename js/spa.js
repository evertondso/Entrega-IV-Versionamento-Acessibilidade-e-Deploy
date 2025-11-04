import { templateHome, templateProjetos, templateCadastro } from './template.js';

import { setupFormValidation } from './validacao.js';
import { setupProjectModal } from './projetos.js';

const rotas = {
    '': templateHome, 
    '#home': templateHome,
    '#projetos': templateProjetos,
    '#cadastro': templateCadastro
};

function renderPage(template) {
    const appContainer = document.getElementById('app-container');
    
    if (appContainer) {
        appContainer.innerHTML = template;
        
        if (window.location.hash === '#cadastro') {
            setupFormValidation(); 
        }

        if (window.location.hash === '#projetos') {

            try {
                console.log('Inicializando modal de projetos...');
                setupProjectModal();
            } catch (err) {
                console.error('Erro ao inicializar modal de projetos:', err);
            }
        }
    }
}

export function handleRoute() {
    const hash = window.location.hash; 
    console.log('Mudança de rota para:', hash);
    
    const template = rotas[hash] || rotas['']; 

    renderPage(template);
}

export function initSPA() {
    window.addEventListener('hashchange', handleRoute);
    
    handleRoute(); 
}