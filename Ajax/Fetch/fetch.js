
        // then é para recuperar
        // da para mandar requisição POST
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify({
                title:'curso',
                body: 'meu conteudo',
                userId: 10
            }),
            headers:{
                'Content-Type':'application/json; charset=UTF=8'
            }
        }).then(response=> response.json()).then(json=>console.log(json));
