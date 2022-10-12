function nomeComprador (nome) {
    console.log (`Olá ${nome}`);
}

function entregaProduto (nomeProduto, nomeRecebeu, enderecoEntega) {
    const mensagem = (`Fizemos a entrega do produto ${nomeProduto} no endereço ${enderecoEntega} com sucesso!

    O seu produto foi recebido por: ${nomeRecebeu}
    
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)

console.log (mensagem);

}

function email (enderecoEmail) {
    console.log (`atenciosamente 
            ${enderecoEmail}`)
}

nomeComprador("Mauro Carlos")
entregaProduto ("tenis", "ana carolina", "avenida mario palma")


email ("mauro_carlos14@hotmail.com")