//    requisioção será feita após a paginar carregar dois segundos
            setTimeout(function(){
                var request = new XMLHttpRequest();
            request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
            request.onload = function(){
            if(this.status >= 200 && this.status < 400){
                var data = JSON.parse(this.response);
                console.log(data);
            }else{
                console.log('erro');
            }
            }
            request.onerror = function(){

            }
            request.send(); 
            },2000)
