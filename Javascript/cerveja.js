document.getElementById('addToCartBtn').addEventListener('click', function() {
    // Seleciona todos os checkboxes com a classe 'select-drink'
    const selectedDrinks = document.querySelectorAll('.select-drink:checked');
    
    // Verifica se alguma bebida foi selecionada
    if (selectedDrinks.length > 0) {
        let drinksList = [];
        
        // Percorre todas as bebidas selecionadas e armazena o valor (nome da bebida)
        selectedDrinks.forEach(drink => {
            drinksList.push(drink.value);
        });
        
        // Exibe um alerta com as bebidas selecionadas
        alert('Você adicionou as seguintes bebidas ao carrinho: ' + drinksList.join(', '));
        
        // Aqui você pode adicionar lógica para adicionar ao carrinho ou enviar os dados para o backend
    } else {
        alert('Por favor, selecione pelo menos uma bebida.');
    }
});
