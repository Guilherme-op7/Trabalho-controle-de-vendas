
# 🧙‍♂️ Sistema de Controle de Vendas - Mercado Mágico ✨

## 🎯 Sobre o Projeto

Este é um sistema simples de **Controle de Vendas**, feito em **JavaScript**, utilizando **prompt-sync** para entrada de dados via terminal.  
O tema escolhido foi um **Mercado de Itens Mágicos**, onde clientes podem comprar poções, espadas, escudos e outros itens lendários!

O projeto foi desenvolvido para a disciplina de **Lógica de Programação**, com orientação do **Professor Bruno**, com foco no uso de:

- Vetores de objetos
- Condicionais
- Laços de repetição
- Funções separadas
- Manipulação de dados via terminal

---

## ✅ Funcionalidades Implementadas

O sistema possui um **menu interativo** com as seguintes opções:

### 🎮 Opções do Menu:

1. 📜 Listar Produtos Mágicos  
2. ✏️ Registrar uma Nova Venda  
3. ❌ Cancelar uma Venda  
4. 📅 Listar Vendas de um Dia  
5. 📆 Listar Vendas por Período  
6. 🧙‍♂️ Buscar Vendas por Cliente  
7. 🏆 Produto Mais Vendido  
8. 📈 Valor Médio das Vendas  
9. 🔍 Listar Vendas por Produto Específico  
10. 📊 Quantidade Total de Vendas  
0. 🚪 Sair da Loja Mágica  

---

## 📌 Como Executar o Projeto

### Pré-requisitos:

- Ter o **Node.js** instalado na máquina.

### Passos para rodar:

1. **Clone o repositório** ou baixe os arquivos.

2. Instale o **prompt-sync** para entrada de dados:

```bash
npm install prompt-sync
```

3. Rode o sistema no terminal:

```bash
node index.js
```

> *(Lembrando: `app.js` é o arquivo onde está o menu principal)*

---

## 🛠️ Organização dos Arquivos

- **index.js** → Onde fica o menu principal e o loop interativo.  
- **funcoes.js** → Onde estão todas as funções que controlam as vendas, listagem, cálculo de médias, etc.

---

## 🧑‍💻 Lógica Utilizada

- Uso de **funções separadas** para cada opção do menu.
- Utilização de **await e async** junto com a função **sleep** para simular carregamentos mágicos ✨.
- Manipulação de **arrays de objetos** para controlar os produtos e as vendas.
- Sistema de **validação de dados** como ID de venda, datas e nome de clientes.

---

## 🌟 Extras Implementados (Bônus):

✅ Menus com emojis e carregamentos com delays  
✅ Busca por cliente específico  
✅ Produto mais vendido até o momento  
✅ Valor médio das vendas  
✅ Filtro por produto específico  
✅ Total de vendas realizadas  

---

## 👨‍🏫 Agradecimento Especial

Agradeço ao **Professor Bruno** pelas aulas e pela proposta desse projeto!  
Essa atividade foi uma ótima oportunidade de praticar tudo o que aprendemos até agora.

---

**Projeto desenvolvido por:**  
**Guilherme Neto, Informatica D**
