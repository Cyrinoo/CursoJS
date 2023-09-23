document.addEventListener('DOMContentLoaded', () => {
    var items = []; // Declare a variável items aqui para torná-la acessível em ambos os eventos

    document.querySelector('input[name=casdastro]').addEventListener('click', () => {
        var nomeProduto = document.querySelector('input[name=nomeProduto]').value;
        var preco = parseFloat(document.querySelector('input[name=valorProduto]').value);

        if (!isNaN(preco) && preco > 0) {
            items.push({
                nome: nomeProduto,
                valor: preco
            });

            var ListaProdutos = document.querySelector('.ListaProdutos');

            var produtosHTML = items.map((item) => `
                <div class="ProdutoSeparado">
                    <h3>${item.nome}</h3>
                    <h3 class="preco"><span>${item.valor.toFixed(2)} Reais</span></h3>
                </div>
            `).join('');

            ListaProdutos.innerHTML = produtosHTML;

            var total = items.reduce((acc, item) => acc + item.valor, 0);
            document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
        }
    });

    document.querySelector('button[name=limpar]').addEventListener('click', () => {
        items = []; // Limpar o array

        // Limpar a lista de produtos
        var ListaProdutos = document.querySelector('.ListaProdutos');
        ListaProdutos.innerHTML = '';

        // Atualizar o total para zero
        document.getElementById('total').textContent = 'R$ 0.00';
    });
});
