var box = document.querySelectorAll('.box')[0];
// com o time out é o tempo que será executado
// setTimeout(()=>{
//     box.classList.add('animEsquerda');
//     // 1000 = 1 segundo que será executado
// },1000);

// para ver com click, basta chamar a função
box.addEventListener('click',()=>{
    // quando clicar executa o que está acontecendo aqui dentro desta função
    box.classList.add('animEsquerda');
})