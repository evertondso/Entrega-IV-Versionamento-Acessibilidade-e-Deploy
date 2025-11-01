export const templateHome = `
    <section>
        <h2>Quem somos?</h2>
        <figure class="imagem-grande">
            <img src="imagens/criança_feliz.PNG.png"
                alt="Grupo de crianças unidas e sorrindo, representando a missão da ONG Caminho União."
                title="A União faz a Força">
        </figure>
        <p> Somos uma organização que cuida de crianças carentes... </p>
        <p>
            Somos uma organização que cuida de crianças carentes, nos unimos em
            prol de um futuro melhor para essas crianças, oferecendo apoio, educação
            e recursos essenciais. Nossos esforços são voltados para garantir que
            cada criança tenha a oportunidade de crescer em um ambiente seguro e
            saudável, onde seus direitos sejam respeitados e suas necessidades atendidas.
            Acreditamos que, ao investir no bem-estar dessas crianças, estamos construindo
            um futuro mais justo e promissor para toda a sociedade.
            Todos os dias trabalhamos para fazer a diferença na vida dessas crianças,
            proporcionando-lhes esperança, amor e oportunidades para um futuro melhor.
        </p>
    </section>

    <section>
        <h2>Missão da Ong </h2>
        <p>
            Promover ajuda as crianças que precisam de uma atenção maior.
            Fornecer recursos e apoio para garantir que todas as crianças tenham acesso a
            educação, saúde e um ambiente seguro para crescer.
            Trabalhar em parceria com a comunidade para criar um impacto positivo e duradouro
            na vida das crianças carentes.
            Defender os direitos das crianças e lutar contra a pobreza infantil, buscando soluções
            sustentáveis para melhorar suas condições de vida.
            Inspirar esperança e transformar vidas, proporcionando às crianças carentes a oportunidade
            de um futuro melhor.
        </p>
    </section>

    <section>
        <h2>Contato com a ONG</h2>
        <address>
            <p>Endereço: Rua Adamantina, 45 Bairro jacupiara/PR</p>
            <p>Telefone: (17)967848488</p>
            <p>Email: Contato@ONGCaminhouniao.org.br</p>
        </address>
    </section>
`;

export const templateProjetos = `
    <section id="nossos-projetos">
        <h2>Nossos Projetos Atuais</h2>
        <p>Conheça as iniciativas que transformam a vida de centenas de crianças. Sua ajuda é fundamental para o sucesso delas.</p>

        <article>
            <h3>Reforço Escolar e Oficinas Criativas</h3>
            <figure class="imagem-grande">
                <img src="imagens/crianca_escola.png" alt="Criança desenhando e aprendendo na sala de aula"
                    title="Oficina de Arte e Educação">
            </figure>
            <span class="badge badge-educacao">Educação</span>
            <p>Oferecemos aulas de reforço em português e matemática, além de oficinas de arte, música e esporte
                para garantir o desenvolvimento integral e a permanência na escola.</p>
        </article>

        <article>
            <h3>Alimentação e Saúde</h3>
            <span class="badge badge-saude">Saúde</span>
            <p>Distribuímos cestas básicas e oferecemos acompanhamento nutricional e odontológico periódico,
                garantindo que as crianças tenham a base necessária para crescerem fortes e saudáveis.</p>
        </article>
    </section>

    <section id="voluntariado">
        <h2>🤝 Seja um Voluntário Transformador</h2>
        <figure class="imagem-grande">
            <img src="imagens/voluntarios.png"
                alt="Grupo de voluntários sorridentes ajudando crianças em atividades educativas e recreativas.">
        </figure>
        <p>Seu tempo e seu talento são doações inestimáveis. Junte-se à nossa equipe e seja a mudança que você
            deseja ver no mundo!</p>
    </section>
    
    <div class="cards">
        <div class="card">
            <img src="imagens/crianca_escola.png" alt="Criança desenhando">
            <h3>Reforço Escolar.</h3>
            <p>Oferecemos aulas e oficinas para o desenvolvimento das crianças.</p>
            <span class="badge">Educação</span>
            <button class="btn-saiba-mais" data-project="reforco-escolar">Saiba Mais</button>
        </div>

        <div class="card card-bg-alimentacao">
            <!-- imagem incluída como background; fornece alternativa para leitores de tela abaixo -->
            <img class="visually-hidden" src="imagens/Nutricionista_criancas_da_ong.png" alt="Nutricionista com crianças da ONG">
            <div class="card-content">
                <h3>Alimentação e Saúde</h3>
                <p>Programas de alimentação, acompanhamento nutricional e ações de saúde preventiva.</p>
                <span class="badge badge-saude">Saúde</span>
                <button class="btn-saiba-mais" data-project="alimentacao-saude">Saiba Mais</button>
            </div>
        </div>
    </div>

    <section id="doacoes" aria-labelledby="doacoes-title">
        <h2 id="doacoes-title">💰 Como Doar e Fazer a Diferença</h2>
        <p>Ajude o Caminho União a transformar vidas com doações seguras e transparentes. Você
            pode contribuir de várias formas, de acordo com sua disponibilidade:</p>

        <ul>
            <li><strong>Doação única:</strong> um aporte pontual que atende necessidades imediatas.</li>
            <li><strong>Doação recorrente:</strong> apoio mensal que garante a continuidade dos projetos.</li>
            <li><strong>Doação em bens:</strong> roupas, brinquedos, livros e alimentos não-perecíveis em bom estado.</li>
        </ul>

        <p><strong>Exemplo de formas de pagamento (informações fictícias — substitua pelas oficiais):</strong></p>
        <ol>
            <li>Transferência bancária: Banco Exemplo - Agência 0000 - Conta 000000-0 - ONG Caminho União (CNPJ: 00.000.000/0000-00)</li>
            <li>Pix: chave pix@caminhouniao.org.br</li>
            <li>Cartão de crédito: doe de forma segura pelo botão abaixo.</li>
        </ol>

        <div class="doacao-cta">
            <a href="#cadastro" class="btn btn-doar" role="button" aria-label="Doar agora via cartão de crédito">Doar Agora</a>
            <a href="#cadastro" class="btn btn-contato" role="button" aria-label="Entrar em contato para doações em bens">Quero doar bens</a>
        </div>

        <p class="nota">Ao doar, você receberá um comprovante por e-mail. Para dúvidas, comprovantes fiscais ou agendamento de entrega de bens, escreva para <a href="mailto:Contato@ONGCaminhouniao.org.br">Contato@ONGCaminhouniao.org.br</a> ou ligue para (17) 96784-8488.</p>
        <p class="acessibilidade">Se precisar de ajuda para realizar a doação (telefone, formulário alternativo ou acessibilidade), entre em contato — teremos prazer em ajudar.</p>
    </section>
`;


export const templateCadastro = `
    <h1>Junte-se ao Caminho União!</h1>
    <p>Preencha os campos abaixo para fazer seu cadastro. É o primeiro passo para nos ajudar a transformar vidas.</p>

    <form class="form-cadastro" id="cadastroForm" method="POST">
        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com">

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required maxlength="14" placeholder="000.000.000-00">

            <label for="dataNasc">Data de Nascimento:</label>
            <input type="date" id="dataNasc" name="dataNasc" required>
        </fieldset>

        <fieldset>
            <legend>Endereço e Contato</legend>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required maxlength="15" placeholder="(99) 99999-9999">

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required maxlength="9" placeholder="00000-000">

            <label for="endereco">Endereço Completo:</label>
            <input type="text" id="endereco" name="endereco" required>
            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required placeholder="Ex: São Paulo">

            <label for="estado">Estado (UF):</label>
            <input type="text" id="estado" name="estado" required maxlength="2" placeholder="Ex: SP">

            <label for="interesse">Qual seu interesse principal?</label>
            <select id="interesse" name="interesse" required>
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="voluntario">Quero ser Voluntário</option>
                <option value="doador">Quero ser Doador</option>
                <option value="apadrinhar">Quero Apadrinhar</option>
            </select>

            <label for="estadoCivil">Qual seu status de relacionamento</label>
            <select id="estadoCivil" name="estadoCivil" required>
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="viuvo">Viuvo(a)</option>
            </select>
        </fieldset>
        <div class="botoes">
            <button type="submit">Enviar Cadastro</button>
            <button type="reset">Limpar Formulário</button>
        </div>
    </form>

    <section>
        <h2>Contato com a ONG</h2>
        <address>
            <p>Endereço: Rua Adamantina, 45 Bairro jacupiara/PR</p>
            <p>Telefone: (17)967848488</p>
            <p>Email: Contato@ONGCaminhouniao.org.br</p>
        </address>
    </section>
`;