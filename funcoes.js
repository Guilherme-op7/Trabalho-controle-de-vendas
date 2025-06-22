// Importando o prompt-sync pra digitar pelo terminal
import prompt from 'prompt-sync';
let ler = prompt();

// Lista de produtos da loja
export let produtos = [
    {id : 1 , nome: 'Pocao de vida', preco: 100},
    {id : 2 , nome: 'Pocao de inteligencia', preco: 159},
    {id : 3 , nome: 'Espada magica', preco: 500},
    {id : 4 , nome: 'Escudo do dragao', preco: 300},
    {id : 5 , nome: 'Anel da sorte', preco: 600},
    {id : 6 , nome: 'Capa da invisibilidade do Harry Potter', preco: 1000}
]

// Vendas que ja foram feitas
export let vendas = [
    {id: 1, cliente: 'Guilherme', produto: 'Pocao de vida', valor: 100, data: '2025-06-10'},
    {id: 2, cliente: 'Bruno', produto: 'Espada magica', valor: 5050, data: '2025-06-11'},
    {id: 3, cliente: 'Robson', produto: 'Pocao de inteligencia', valor: 150, data: '2025-06-21'},
    {id: 4, cliente: 'Gustavo', produto: 'Pocao de inteligencia', valor: 150, data: '2025-06-12'},
    {id: 5, cliente: 'Ana', produto: 'Anel da sorte', valor: 600, data: '2025-06-14'},
    {id: 6, cliente: 'Lucas', produto: 'Escudo do dragao', valor: 300, data: '2025-06-16'},
    {id: 7, cliente: 'Lobo', produto: 'Capa da invisibilidade do Harry Potter', valor: 1000, data: '2025-06-11'},
    {id: 8, cliente: 'Gabriel', produto: 'Pocao de inteligencia', valor: 150, data: '2025-06-02'}
];

// Mostra os produtos pro cliente escolher
export async function produtos() {
    console.log('\n 🛒 Produtos disponiveis na loja magica✨');
    for(let item of produtos) {
        await sleep(500);
        console.log(item.id + ', ' + item.nome + ' - ' + item.preco + ' moedas magicas!');
    }
    console.log('')
}

// Registra uma nova venda
export async function vender() {
    console.log('🧾 REGISTRAR NOVA VENDA 🧾');
    await sleep(500);
    console.log('📝 Nome do cliente magico: ');
    let cliente = ler();

    await produtos(); // Exibe os produtos para o cliente escolher

    console.log('Escolha o ID do produto: ');
    let idProduto = Number(ler());

    let achou = null;

    //procura pelo o id o produto
    for(let i = 0; i < produtos.length; i++) {
        if(produtos[i].id === idProduto) {
            achou = produtos[i];

        }
    }
    // se ele nao existir
        if(achou === null) {
            console.log('❌ Produto não encontrado! Venda cancelada. \n');
            return;

        }

        await sleep(500);

        console.log('Data venda: 📆');
        let data = ler();

        // cria o objeto de nova venda
        let venda = {
            id: vendas.length + 1,
            cliente: cliente,
            produto: achou.nome,
            valor: achou.preco,
            data: data
        };
        
        vendas.push(venda)

        await sleep(500);

        console.log('✅ Venda registrada com sucesso!');
        await sleep(500);
        console.log(`Venda registrada: ID: ${venda.id} | Cliente: ${venda.cliente} | Produto: ${venda.produto} | Valor: ${venda.valor} | Data: ${venda.data}\n`);
}

// função pra cancelar venda pelo id
export async function cancelarvenda() {
    console.log('\n ❌ CANCELAR VENDA ❌');
    await sleep(500);

    console.log('Informe o id da venda para cancelar: ');
    let id = Number(ler());

    let nova = [];  // array pra guardar as que nao serao canceladas
    let achou = false; // pra saber se encontrou a venda

    for (let i = 0; i < vendas.length; i++) {

        if(vendas[i].id !== id) {
            nova[nova.length] = vendas[i] // mantem todas as vendas que nao foram canceladas
        }

        else {
            achou = true
        }
        
    }
        // atualiza o array original, padrao
        vendas.length = 0;

        for(let i = 0; i < nova.length; i++) {
            vendas[i] = nova[i]
        }

        // mensagem de sucesso ou erro
        if (achou) {
            console.log('✅ Venda cancelada com sucesso!\n')
        }

        else {
            console.log('❌ Venda não encontrada. \n');
        }

}

// função para listar vendas de um dia especifico
export async function vendasdodia() {
    console.log('🗒️ LISTAR VENDAS DO DIA ');
    await sleep(500);

    console.log('informe a data: ');
    let dia = ler();
    let total = 0;
    let achou = false;

    for(let i = 0; i < vendas.length; i++) {
        if(vendas[i].data === dia){
            console.log('ID: ' + vendas[i].id + ' | Cliente: ' + vendas[i].cliente + ' | Produto: ' + vendas[i].produto + '| Valor: ' + vendas[i].valor);
            total += vendas[i].valor
            achou = true;
        }
    }

    if(achou) {
        console.log(`Total vendido no dia: ${total} moedas magicas🔥\n`);
    }
    else {
        console.log('❌ Nenhuma venda nesse dia!')
    }
} 

// função pra listar vendas em um periodo
export async function vendasdoperiodo() {
    await sleep(500);
    console.log(' LISTAR VENDAS POR PERIODO ');
    await sleep(500);
    console.log('Digite a data inicial: ');
    let inicio = ler();
    await sleep(500);
    console.log('Digite a data final: ')
    let fim = ler();

    if(inicio > fim) {
        console.log('Erro: a data inicial nao pode ser depois da data final!')
        return
    }

    let total = 0;
    let achou = false;

    for (let i = 0; i < vendas.length; i++) {
        if(vendas[i].data >= inicio && vendas[i].data <= fim) {
            console.log(`ID: ${vendas[i].id} | Cliente: ${vendas[i].cliente} | Produto: ${vendas[i].produto} | Valor: ${vendas[i].valor} | Data: ${vendas[i].data}`);
            total += vendas[i].valor;
            achou = true;
        }

    }
    if (achou) {
        console.log(`🔍 Total de vendas nesse periodo: ${total} moedas mágicas🔥`)
    }

    else {
        console.log('❌ Nenhuma venda nesse periodo!')
    }
}


// buscar as vendas de um cliente especifico
export async function acharcliente() {
    console.log('🔍 BUSCAR VENDAS POR CLIENTE ') 
    await sleep(500);
    console.log('Digite o nome do cliente: ');
    let nome = ler().toLowerCase();

    let achou = false;

    for(let i = 0; i < vendas.length; i++) {

        if(vendas[i].cliente.toLowerCase() === nome) {
            console.log(`ID: ${vendas[i].id} | Produto: ${vendas[i].produto} | Valor: ${vendas[i].valor} | Data: ${vendas[i].data}`);
            achou = true;
        }

    }

    if(!achou) {
        console.log('❌ Nenhuma venda encontrada para esse cliente!')
    }
    
}

// função que acha o produto mais vendido ate o momento
export async function maisvendido() {
    await sleep(500);
    console.log('💰 PRODUTO MAIS VENDIDO 💰');

    let contagem = {}; // objeto para contar quantas vezes cada produto foi vendido
    let topvendas = '';
    let qtdmaior = 0;

    for(let i = 0; i < vendas.length; i++) {

        let produtoo = vendas[i].produto;

        if(contagem[produtoo] === undefined) {
            contagem[produtoo] = 1;
        }

        else {
            contagem[produtoo] ++;
        }

    }

    /// descobre qual produto teve mais vendas
    for (let produtoo in contagem) {

        if (contagem[produtoo] > qtdmaior) {
            qtdmaior = contagem[produtoo];
            topvendas = produtoo;
        }

    }

    if (qtdmaior > 0) {
        console.log(`O produto mais vendido ate agora foi ${topvendas}, (${qtdmaior}) vendas💰`)
    }

    else {
        console.log('❌ Nenhuma venda ainda!')
    }

}

// função para calcular o valor medio das vendas feitas
export async function mediavendas() {
    await sleep(500);
    console.log('📈 VALOR MEDIO DE VENDAS 📈');
    let total = 0;

    for (let i = 0; i < vendas.length; i++) {
        total += vendas[i].valor;
    }

    if(vendas.length > 0) {
        let media = total / vendas.length;

        console.log(`Valor medio das vendas: ${media} moedas mágicas🔥`)
    }

    else {
        console.log('❌ Nenhuma Venda registrada ainda!')
    }
}

// funções para listar as vendas de um produto especifico
export async function porprodutos() {
    console.log('🗒️ LISTAR VENDAS POR PRODUTOS 🗒️');
    await sleep(500);
    console.log('Digite o nome do produto: ');
    let nome = ler().toLowerCase();

    let total = 0;

    let encontrou = false;

    for (let i = 0; i < vendas.length; i++) {
        if(vendas[i].produto.toLowerCase() === nome) {
        console.log(`ID: ${vendas[i].id} | Produto: ${vendas[i].produto} | Valor: ${vendas[i].valor} | Data: ${vendas[i].data}`);
        total += vendas[i].valor;
        
        encontrou = true;

        }
    }

    if(encontrou) {
        console.log(`💵 O valor de venda desse produto é de ${total} moedas magicas🔥`)
    }

    else {
        console.log('❌ Nenhuma venda encontrada nesse produto!')
    }
}

// função que mostra o total de vendas ate o momento
export async function total() {
    console.log('QUANTIDADE TOTAL DE VENDAS 🔱');
    await sleep(1000);
    console.log(`numero total de vendas realizadas: ${vendas.length}.`);
}

// função que pausa o codigo por um tempo, que da a sensação de carregamento de algo
  function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }
