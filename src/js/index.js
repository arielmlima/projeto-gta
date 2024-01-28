/* 

Objetivo 1: Quando o usuario clicar no botão de plataforma deve abrir uma caixa com os botões de seleção da plataforma 

  Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

  Passo 2 - Pegar o elemento do conteudo que precisa ser mostrado
  
  Passo 3 - Pegar o clique do usuario no js

  Passo 4 - Quando o usuario clicar, adicionar a classe ativa na listagem de plataformas dentro do botão para que o conteudo  apareca

Objetivo 2: Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteudo deve ser escondido

  Passo 1- Verificar se o botão ja esta aberto, se sim, devemos remover a classe ativa para que ele esconda o conteudo novamente

*/


const botao = document.querySelector(".btn-plataforma");
console.log(botao);

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");


botao.addEventListener("click", () => {

  elementoPlataformas.classList.toggle("ativo");

});