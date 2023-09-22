            // // o id é elemento, por isso que ja retorna diretamente o elemento
            // var elemento = document.getElementById('box')
            // // manipulando style por variavel do js
            // // atenção pois muda do css para o JS
            // elemento.style.width = 100;
            // elemento.style.height = 100;
            // elemento.style.backgroundColor = 'green';
            // elemento.style.marginLeft = 200;

            var elementos = document.getElementsByClassName('box');

            for( var i = 0; i < elementos.length; i++){
                var el = elementos[i];
                el.style.width = 100;
                el.style.height = 100;
                el.style.backgroundColor = 'green';
                el.style.marginLeft = 200;
                el.style.marginTop = 10;
            }
            
