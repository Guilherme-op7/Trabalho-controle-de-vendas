// Importando o prompt-sync pra digitar pelo terminal
import prompt from 'prompt-sync';
let ler = prompt();

// importando todas as funções que foram feitas no outro arquivo chamado funcoes.js
import { acharcliente, cancelarvenda, maisvendido, mediavendas, porprodutos, produtos, total, vendasdodia, vendasdoperiodo, vender } from './funcoes.js';


// função principal que tem o menu interativo
async function  menu() { 
    
    let opcao;

    do {
        // mostra o menu com pausas entre as linhas
        console.log('\n✨ === BEM-VINDO AO MERCADO MÁGICO === ✨');
        await sleep(500);
        console.log('\n Escolha uma das magias abaixo:');
        await sleep(500);
        console.log('\n 1 - 📜 Listar Produtos Mágicos');
        await sleep(500);
        console.log('\n 2 - ✏️ Registrar uma Nova Venda');
        await sleep(500);
        console.log('\n 3 - ❌ Cancelar uma Venda');
        await sleep(500);
        console.log('\n 4 - 📅 Listar Vendas de um Dia');
        await sleep(500);
        console.log('\n 5 - 📆 Listar Vendas por Período');
        await sleep(500);
        console.log('\n 6 - 🧙‍♂️ Buscar Vendas por Cliente');
        await sleep(500);
        console.log('\n 7 - 🏆 Produto Mais Vendido');
        await sleep(500);
        console.log('\n 8 - 📈 Valor Médio das Vendas');
        await sleep(500);
        console.log('\n 9 - 🔍 Listar Vendas por Produto Específico');
        await sleep(500);
        console.log('\n 10 - 📊 Quantidade Total de Vendas');
        await sleep(500);
        console.log('\n 0 - 🚪 Sair da Loja Mágica');
        await sleep(500);

        //le a opção do usuario
        console.log('\n Escolha uma das opções: ');
        opcao = Number(ler());


        // verifica qual opção o usuario escolheu e chama a função
        if(opcao === 1) {
           await produtos();
        }

        else if(opcao === 2) {
          await  vender();
        }

        else if(opcao === 3) {
          await  cancelarvenda();
        }

        else if(opcao === 4) {
          await  vendasdodia();
        }

        else if(opcao === 5) {
          await  vendasdoperiodo();
        }

        else if(opcao === 6) {
          await  acharcliente();
        }

        else if(opcao === 7) {
          await  maisvendido();
        }

        else if(opcao === 8) {
          await  mediavendas();
        }

        else if(opcao === 9) {
          await  porprodutos();
        }

        else if(opcao === 10) {
          await  total();
        }

        else if(opcao === 0) {
            await sleep(500);
            console.log('🚪 Encerrando o sistema... Até a próxima mágia✨')
        }

        else {
            await sleep(500);
            console.log('❌ Opção inválida! Escolha uma mágia válida.')
        }
    } while (opcao !== 0); // continua repetindo ate o usuario escolher sair
}

// inicia o menu interativo
menu();

// função que pausa o codigo por um tempo, que da a sensação de carregamento de algo
function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
}