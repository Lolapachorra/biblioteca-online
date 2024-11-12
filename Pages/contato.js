document.addEventListener("DOMContentLoaded", function() {
    const divider = document.querySelector('.section-divider');

    // Configuração do observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                divider.classList.add('visible'); // Adiciona a classe quando entra na tela
            } else {
                divider.classList.remove('visible'); // Remove a classe quando sai da tela
            }
        });
    }, { threshold: 0.1 }); // threshold define quando a animação ativa (10% visível)

    observer.observe(divider); // Observa a linha
});

function setFavicon(iconClass) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');

    // Define o ícone do Font Awesome
    context.font = '48px FontAwesome';
    context.fillStyle = 'crimson';  // Cor do ícone
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Desenha o ícone no centro do canvas
    context.fillText('\uf02d', 32, 32); // '\uf013' é o código unicode para o ícone de engrenagem (gear)

    // Cria o favicon a partir do canvas
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
}

// Chama a função com o ícone desejado
document.addEventListener('DOMContentLoaded', () => {
    setFavicon('fa-book'); // ícone aleatório: engrenagem (fa-gear)
});



const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");

// Função para abrir o modal
function openModal(modal) {
    if (modal) modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal(modal) {
    if (modal) modal.style.display = "none";
}

// Eventos para abrir os modais
if (signupBtn && signupModal) {
    signupBtn.addEventListener("click", () => openModal(signupModal));
}
if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => openModal(loginModal));
}

// Evento para fechar o modal ao clicar no "x" ou no botão "Fechar"
document.querySelectorAll(".close, .modal-close-btn").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const modalId = event.target.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) closeModal(modal);
    });
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        closeModal(event.target);
    }
});
