var fundo = document.querySelector('body')
var botao1 = document.createElement('button');
var botao2 = document.createElement('button');
botao1.innerText = 'Click';
botao2.innerText = 'Me';
document.body.appendChild(botao1);
document.body.appendChild(botao2);
botao1.addEventListener('click', entrar);
botao2.addEventListener('click', fechar);
botao1.addEventListener('mouseenter', passar);
botao2.addEventListener('mouseenter', passar1);
botao1.addEventListener('mouseout', sair);
botao2.addEventListener('mouseout', sair);

function entrar() {
    fundo.style.backgroundImage = "url(./imagens/girl_bow_leaves_684504_1920x1080.jpg)";
    fundo.style.backgroundRepeat = 'no-repeat';
    fundo.style.backgroundAttachment = 'fixed';
    fundo.style.backgroundSize = '100%';
    fundo.style.transition = '0.8s ease-in-out';
}
function fechar() {
    fundo.style.backgroundImage = "url(./imagens/girl_sunglasses_gesture_691729_1920x1080.jpg)";
    fundo.style.backgroundRepeat = 'no-repeat';
    fundo.style.backgroundAttachment = 'fixed';
    fundo.style.backgroundSize = '100%';
    fundo.style.transition = '0.8s ease-in-out';
}
function sair() {
    botao1.style.background = 'white';
    botao2.style.background = 'white';
}
function passar() {
    botao1.style.backgroundColor = 'green';
}
function passar1() {
    botao2.style.backgroundColor = 'red';
}
