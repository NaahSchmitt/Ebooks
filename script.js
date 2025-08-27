// Navegação suave
function scrollToBooks() {
    document.getElementById('livros').scrollIntoView({
        behavior: 'smooth'
    });
}

// Navegação do menu
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar link ativo conforme scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Click nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Sistema de Modal para os livros
const bookData = {
    ebook: {
        title: "O que São as CriptoMoedas?",
        genre: "Gênero • E-book",
        pages: "19 páginas",
        status: "Disponível Gratuitamente",
        description: "Vamos falar sobre Impacto das Cripto na Economia, Blockchain, Mineradores, Principais Criptomoedas, e um pouco mais..",
        story: `
            <h3>📖 A História</h3>
            <p>Quando fui apresentada às criptomoedas pela primeira vez, confesso que fiquei completamente curiosa! A possibilidade de investir e até trabalhar com crypto me deixou super empolgada!! Parecia um universo cheio de oportunidades esperando por mim.</p>
            
            <p>Mas como toda boa história de aprendizado, a minha teve alguns tropeços pelo caminho... No início, acabei tendo alguns prejuízos porque, vamos combinar, eu investia em moedas que eu nem fazia ideia do que eram! Às vezes alguém falava 'essa moeda é boa' e eu já corria investir. Spoiler: nem sempre era tão bom assim! Hahaha
            Foi aí que percebi que precisava estudar de verdade esse mercado. Comecei a entender melhor como as coisas funcionavam, aprendi a não me arriscar tanto, fiquei mais esperta com os golpes (que infelizmente existem), e hoje invisto com muito mais consciência e segurança.</p>
            
            <p>Por isso criei este e-book: para compartilhar com você tudo que aprendi nessa jornada, os erros que cometi (para você não repetir!), e principalmente, como investir de forma inteligente e segura. Porque acredito que toda mulher merece ter as ferramentas certas para construir seu futuro financeiro! </p>
        `,
        buttonText: "📥 Baixar E-book Gratuito",
        buttonAction: "downloadEbook"
    },
    livro: {
        title: "Título do Seu Livro",
        genre: "Gênero • Livro Físico",
        pages: "280 páginas",
        status: "Em Pré-venda",
        description: "Descrição completa do seu livro físico. Fale sobre a jornada de criação, os personagens principais, o mundo que você construiu, e por que esta história precisa ser contada.",
        story: `
            <h3>📚 Prévia da História</h3>
            <p>Como este é um livro que ainda será publicado, aqui você pode colocar uma prévia exclusiva, um prólogo, ou o primeiro capítulo para despertar o interesse dos leitores.</p>
            
            <p>Conte sobre os personagens principais, o cenário, e dê um gostinho do tom e estilo da narrativa. Faça com que os leitores se sintam conectados desde o primeiro momento.</p>
            
            <p>Você também pode falar sobre o processo de escrita, suas inspirações, e o que torna este livro especial em relação às suas outras obras.</p>
        `,
        buttonText: "🛒 Garantir Minha Cópia",
        buttonAction: "preorderBook"
    }
};
function openBookModal(bookType) {
    const modal = document.getElementById('book-modal');
    const modalBody = document.getElementById('modal-body');
    const book = bookData[bookType];
    
    modalBody.innerHTML = `
        <div class="modal-book-content">
            <div class="modal-book-details">
                <div class="modal-cover-placeholder">
                    <img src="https://naahschmitt.github.io/Ebooks/image/cover.png" alt="Capa do ${book.title}">
                </div>
                <div class="modal-book-info">
                    <h2 class="modal-book-title">${book.title}</h2>
                    <p><strong>${book.genre}</strong></p>
                    <p><strong>📖 ${book.pages}</strong></p>
                    <p><strong>📊 Status:</strong> ${book.status}</p>
                    <p>${book.description}</p>
                    <button class="download-button" onclick="${book.buttonAction}()">
                        ${book.buttonText}
                    </button>
                </div>
            </div>
            <div class="modal-book-story">
                ${book.story}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animação de entrada
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeBookModal() {
    const modal = document.getElementById('book-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('book-modal');
    if (event.target == modal) {
        closeBookModal();
    }
}

// Ações dos botões
function downloadEbook() {
    // Link direto para download do seu e-book
    const ebookUrl = 'https://drive.google.com/uc?export=download&id=1SKNEcxnhmCFLyhC1QLl_wq3gMysEBov5';
    
    // Abre o download em uma nova aba
    window.open(ebookUrl, '_blank');
    
    // Opcional: mostrar mensagem de agradecimento
    setTimeout(() => {
        alert('Obrigada por baixar meu e-book! Espero que você goste! 💜');
    }, 500);
}

function preorderBook() {
    // Aqui você pode adicionar a lógica para pré-venda
    alert('Funcionalidade de pré-venda! Aqui você conectaria com sua plataforma de vendas.');
    // Exemplo: window.open('link-para-pre-venda');
}

// Efeitos de parallax suave
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-book');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${element.style.transform.includes('rotate') ? element.style.transform.match(/rotate\((.*?)\)/)[1] : '0deg'})`;
    });
});


// Animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animações aos elementos quando aparecem na tela
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.book-card, .sobre-content, .contato-content');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});