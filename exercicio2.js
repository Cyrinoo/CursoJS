
            var ano = prompt('Qual o ano do seu nascimento?');
            while(ano >= 2023){
                alert('Digite o ano corretamente');
                // para forçar o usuario a responder certo pode usar o while
                ano = prompt('Qual o ano do seu nascimento?');
            }

            var atual = 2023;
            var ia = (atual - ano)
            alert('a idade atual é: '+ia);
