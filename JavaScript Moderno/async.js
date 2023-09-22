function testes(){
    return new Promise((resolve,reject)=>{
        const erro = true;
        setTimeout(function(){
            resolve("A promisse foi resolvida com sucesso");
        })
        if(erro){
            reject('erro')
        }
    },2000)
}
testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})


// funções assincronas
//  é uma forma mais elegante de se lidar com a promisse

async function testes2(){
    // so vai executar o resto se da função se o testes for executado.
    await testes().then((res)=>{
        alert(res);
    });
    alert('olá');
}