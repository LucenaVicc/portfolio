const textos = [
  "Designer gráfico com foco em identidade visual forte e comunicação criativa.",
  "Designer UI/UX com foco em experiências digitais intuitivas e atraentes.",
  "Desenvolvedor FullStack com expertise em front-end, back-end e aplicações móveis.",
  "Entusiasta de IA, explorando aplicações criativas e inovadoras em design e desenvolvimento.",
  "Modelador 3D, trazendo conceitos à vida com detalhes realistas e visuais impressionantes.",
  "Editor de vídeo, transformando ideias em narrativas visuais dinâmicas e impactantes."  
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
      disableOnInteraction: true,
      reverseDirection: true
    },
    speed: 3000,
    grabCursor: false,

    // Desabilitar interação com touch
    breakpoints: {
      900: {
        slidesPerView: 3,
        allowTouchMove: false
      },
      600: {
        slidesPerView: 2,
        allowTouchMove: false
      },
      0: {
        slidesPerView: 1.3,
        allowTouchMove: false
      }
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

const swiper = new Swiper('.habilidades-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  grabCursor: false,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.3, // permite scroll lateral suave
    }
  }
});
