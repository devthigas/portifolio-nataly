

// Fiz a inicialização das bibliotecas e passei os parametros de animação 

// pegar elemento pelo id passar a string na variavel, passar velocidade da animação. e passar valor para deixar visivel ou não
// neste caso ficará visivel 
new TypeIt("#animate", {
    strings: " Bem-vindo ao meu portifólio! Desenvolvo aplicações utilizando HTML, CSS e JavaScript.",
    speed: 100,
    waitUntilVisible: true,
}).go();

AOS.init()

function btnMsg(){
    alert("Formulário em Construção!!")
}