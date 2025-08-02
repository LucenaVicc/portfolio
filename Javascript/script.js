const textos = [
  "Desenvolvedor Front-End com foco em interfaces modernas e criativas.",
  "Designer gráfico com foco em identidade visual forte e comunicação criativa.",
  "Designer UI/UX com foco em experiências digitais intuitivas e atraentes."
];

let textoIndex = 0;
let charIndex = 0;
let apagando = false;

function digitar() {
  const typed = document.getElementById("typed");
  const textoAtual = textos[textoIndex];

  if (!apagando && charIndex < textoAtual.length) {
    typed.innerHTML += textoAtual.charAt(charIndex);
    charIndex++;
    setTimeout(digitar, 35);
  } else if (!apagando && charIndex === textoAtual.length) {
    apagando = true;
    setTimeout(digitar, 1500);
  } else if (apagando && charIndex > 0) {
    typed.innerHTML = textoAtual.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(digitar, 20);
  } else if (apagando && charIndex === 0) {
    apagando = false;
    textoIndex = (textoIndex + 1) % textos.length;
    setTimeout(digitar, 500);
  }
}

window.onload = digitar;

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.habilidades-swiper', {
    slidesPerView: 5,
    spaceBetween: 70,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true // desliza da esquerda para a direita
    },
    speed: 3000,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      900: { slidesPerView: 3 },
      600: { slidesPerView: 2 },
      0:   { slidesPerView: 1 }
    }
  });
});

function abrirModal(titulo, img, descricao) {
  document.getElementById('modalTitulo').innerText = titulo;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalImg').alt = titulo;
  document.getElementById('modalDescricao').innerText = descricao;


  const modal = document.getElementById('modalProjeto');
  modal.style.display = 'flex'; // ✅ Corrigido para centralizar com flex
  setTimeout(() => modal.classList.add('show'), 10); // ativa o efeito 3D
}

function fecharModal() {
  const modal = document.getElementById('modalProjeto');
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 500); // espera o efeito terminar
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
  const modal = document.getElementById('modalProjeto');
  if (event.target === modal) {
    fecharModal();
  }
};

