// pegar todos os paragrafos do meu html e selecionar o primeiro

var p = document.getElementsByTagName('p');
// assim esta retornando a quantidade de p 
// alert(p.length);

// retorna o conteudo que está dentro com innerHTML
// alert(p[0].innerHTML);
// alert(p[2].innerHTML);

// p[0].innerHTML = 'Manipulando Via JS!';

// for (var i = 0; i < p.length; i++){
//     p[i].innerHTML = 'Manipulando Via JS!' + i;
// }
for( var i = 0; i < 10; i++){
    // vai setar o conteudo e vai ser igual o que ja existe ira adicionar o algo 10 vezes
    p[0].innerHTML = p[0].innerHTML + 'algo';
}