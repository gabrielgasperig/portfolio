// Abre e fecha menu lateral em modo mobile

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

// Fecha o menu lateral ao clicar em algum item e muda para o icone list 

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

// Animar todos os itens na tela que tiverem o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})

// Ativar carregamento no botão de enviar formulário

const form = document.querySelector('#formulario');
const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

form.addEventListener('submit', function (e) {
  if (form.checkValidity()) {
    // formulário válido: ativa o loader
    btnEnviar.style.display = 'none';
    btnEnviarLoader.style.display = 'inline-block';
  } else {
    // formulário inválido: impede envio
    e.preventDefault(); // cancela envio
    form.reportValidity(); // exibe mensagens de erro
  }
});


// tira mensagem de succeso depois de 5s

setTimeout(() => {
  document.querySelector('#alerta').style.display = 'none';
}, 5000)