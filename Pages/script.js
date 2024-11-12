



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

// Seleciona os botões e os modais
// Seleciona os botões e os modais
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

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const track = document.querySelector(".carousel-track");

    if (index >= slides.length) {
        currentSlide = 0; // Volta ao primeiro slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Volta ao último slide
    } else {
        currentSlide = index;
    }

    // Move o track para mostrar o slide atual
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa o carrossel no primeiro slide
showSlide(currentSlide);
