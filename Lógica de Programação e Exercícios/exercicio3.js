
            // calculadora dinamica
            // queremos um numero inicial
            // tipo de operação
            // um numero final
            // fazer validações

            var n1 = prompt('Digita o seu primeiro numero');
            var sinal = prompt('Digita o sinal');
            while(sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*'){
                alert('o sinal não existe');
                var sinal = prompt('Digita o sinal');
            }
            var n2 = prompt('Digita o segundo numero');

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            var total = 0;
            if(sinal == '+'){
                total = n1 + n2
                alert('o resultado total é: '+total);
            }
            else if(sinal == '-'){
                total = n1 - n2
                alert('o resultado total é: '+total);
            }
            else if(sinal == '/'){
                 total = n1 / n2
                 alert('o resultado total é: '+total);
            }
            else if(sinal == '*'){
                total = n1 * n2
                alert('o resultado total é: '+total);
            }
