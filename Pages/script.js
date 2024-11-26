



function setFavicon(iconClass) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');

    // Define o ícone do Font Awesome
    context.font = '48px FontAwesome';
    context.fillStyle = 'crimson';  
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    
    context.fillText('\uf02d', 32, 32); 


    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
}


document.addEventListener('DOMContentLoaded', () => {
    setFavicon('fa-book'); 
});


const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");

// Função para abrir o modal
function openModal(modal) {
    if (modal) modal.style.display = "flex";
}


function closeModal(modal) {
    if (modal) modal.style.display = "none";
}


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
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = slides.length - 1; 
    } else {
        currentSlide = index;
    }

   
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


showSlide(currentSlide);
