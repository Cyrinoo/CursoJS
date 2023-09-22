var arr = ['pedro', 'joao','guilherme','Felipe','Lucas'];
// var [a,b,c] = arr;
// os 3 pontinhos serve para q a partir do C irá serpar o C e o restante
var [a,b,...c] = arr;
alert(c);