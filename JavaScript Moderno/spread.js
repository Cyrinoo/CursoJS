// podemos ter um array e manipular um objeto
var nomes = [
    {
        nome:'joão'
    },{
        nome: 'lucas'
    }
]
// pega os nomes que estão em cima e coloca-os no inicio
var objetos = [...nomes,{
    nome:'pedro'
}]
console.log(objetos)

