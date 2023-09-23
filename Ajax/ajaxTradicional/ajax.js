
        // melhor forma de garantir que a requisição veio com sucesso
            var request = new XMLHttpRequest();
            // colocar a url api
            // requisição do tipo GET
            // falamos que é true
            request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
            request.onload = function(){
                // iniciar verificação
                // primeiro ver se foi feito com sucesso a requisição
            if(this.status >= 200 && this.status < 400){
                // request foi feita com sucesso!
                var data = JSON.parse(this.response);
                console.log(data);
            }else{
                console.log('erro');
            }
            }
            request.onerror = function(){

            }
            // o resultado aparecera depois somente quando enviar
            request.send();
   