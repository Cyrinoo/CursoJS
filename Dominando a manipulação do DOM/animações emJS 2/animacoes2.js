    var span = document.querySelector('.conteudo span');
span.addEventListener('click',function(){
    // script para que quando o leitor abrir a pagina ao clciar no VER MAIS irá mostar o conteudo.
    var conteudo = document.querySelector('.conteudo p');
    if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'ver mais!'
        conteudo.classList.remove('mostrar');
        // caso queira diminuir a pagina, clicar novamente no VER MAIS para mostar o conteudo.
    }else{
        span.innerHTML = 'ocultar'

        conteudo.classList.add('mostrar');
    }})