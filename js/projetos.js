export function setupProjectModal() {
    const modalId = 'modal-projeto';

    if (!document.getElementById(modalId)) {
        const modalHtml = `
        <div id="${modalId}" class="modal" role="dialog" aria-hidden="true" aria-labelledby="modal-title">
            <div class="modal-inner" role="document">
                <button class="modal-close" aria-label="Fechar janela">×</button>
                <h3 id="modal-title"></h3>
                <div id="modal-body" class="modal-body"></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const modal = document.getElementById(modalId);
    const titleEl = modal.querySelector('#modal-title');
    const bodyEl = modal.querySelector('#modal-body');
    const closeBtn = modal.querySelector('.modal-close');

    function openModal(projectKey) {
        let title = 'Projeto';
        let body = '<p>Detalhes sobre o projeto em breve.</p>';

        if (projectKey === 'reforco-escolar') {
            title = 'Reforço Escolar e Oficinas Criativas';
            body = `
                <p>Nosso programa de Reforço Escolar oferece aulas de português e matemática para
                crianças que precisam de apoio extra. Também realizamos oficinas de arte, música e esporte
                para estimular habilidades socioemocionais e criatividade.</p>
                <p>Como funciona:</p>
                <ul>
                    <li>Aulas semanais em turmas pequenas com material didático adaptado.</li>
                    <li>Acompanhamento individual para identificar dificuldades de aprendizagem.</li>
                    <li>Oficinas criativas aos finais de semana com projetos práticos.</li>
                </ul>
                <p>Se quiser participar como voluntário ou apoiar financeiramente o projeto, clique em "Doar Agora" na seção de doações ou preencha o formulário de cadastro.</p>
            `;
        }

        if (projectKey === 'alimentacao-saude') {
            title = 'Alimentação e Saúde';
            body = `
                <p>O projeto de Alimentação e Saúde distribui cestas básicas, promove ações de educação nutricional
                e realiza acompanhamento com profissionais de saúde quando necessário.</p>
                <p>Como funciona:</p>
                <ul>
                    <li>Distribuição periódica de cestas e kits alimentares para famílias em vulnerabilidade.</li>
                    <li>Atendimentos e triagens de saúde em ações comunitárias.</li>
                    <li>Oficinas de alimentação saudável e orientação nutricional para pais e responsáveis.</li>
                </ul>
                <p>Para colaborar com este projeto você pode doar alimentos não-perecíveis, materiais ou apoiar financeiramente.</p>
            `;
        }

        titleEl.innerHTML = title;
        bodyEl.innerHTML = body;
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('open');

        closeBtn.focus();
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeBtn.removeEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    modal.removeEventListener('click', modalBackdropHandler);
    function modalBackdropHandler(e) {
        if (e.target === modal) closeModal();
    }
    modal.addEventListener('click', modalBackdropHandler);

    document.removeEventListener('keydown', escHandler);
    function escHandler(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    }
    document.addEventListener('keydown', escHandler);

    const buttons = document.querySelectorAll('.btn-saiba-mais');
    buttons.forEach(btn => {
        const existing = btn._saibaMaisHandler;
        if (existing) btn.removeEventListener('click', existing);
        const handler = (e) => {
            e.preventDefault();
            const key = btn.dataset.project || 'reforco-escolar';
            openModal(key);
        };
        btn.addEventListener('click', handler);
        btn._saibaMaisHandler = handler;
    });
}

export default setupProjectModal;
