// retorna uma função criado, dizendo resolve ou senão rejeitada.
function testes(){
    return new Promise((resolve,reject)=>{
        const erro = true;
        resolve("A promisse foi resolvida com sucesso");
        if(erro){
            reject('erro')
        }
    })
}
testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})
