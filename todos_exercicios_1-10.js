const produtos = [
    { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
    { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
    { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "moveis", estoque: 8, desconto: 15 },
    { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "moveis", estoque: 3, desconto: 0 },
    { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
    { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
    { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
    { id: 10, nome: "Estante para Livros", preco: 420, categoria: "moveis", estoque: 5, desconto: 10 }
];



//EXERCÍCIO 1: FILTRAR PRODUTOS POR CATEGORIA

const filtrarPorCategoria = (produtos, categoria) => {
    return produtos.filter(produto => produto.categoria === categoria);
};

// Testes:
console.log("=== EXERCÍCIO 1 ===");
const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);
console.log(eletronicos.map(p => p.nome));
   


// EXERCÍCIO 2: PRODUTOS EM ESTOQUE

function produtosDisponiveis(produtos) {
    return produtos.filter(p => p.estoque > 0);
}
// Testes:
console.log("\n=== EXERCÍCIO 2 ===");
const disponiveis = produtosDisponiveis(produtos);
console.log(`Produtos disponíveis: ${disponiveis.length}`);
console.log("Produtos em falta:");
const emFalta = produtos.filter(p => p.estoque === 0);
console.log(emFalta.map(p => p.nome));



// EXERCÍCIO 3: CALCULAR VALOR TOTAL DO ESTOQUE

function valorTotalEstoque(produtos) {
    return produtos.reduce((total, produto) => {
        return total + (produto.preco * produto.estoque);
    }, 0);
}
// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
const total = valorTotalEstoque(produtos);
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);



// EXERCÍCIO 4: APLICAR DESCONTO

function aplicarDescontos(produtos) {
    return produtos.map(produto => {
        const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);

        return {
            ...produto,   // mantém todas as propriedades originais
            precoFinal    // adiciona a nova propriedade
        };
    });
}

// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log("Produtos com desconto:");
comDescontos
  .filter(p => p.desconto > 0)
  .forEach(p => {
    console.log(`${p.nome}: R$ ${p.preco} → R$ ${p.precoFinal.toFixed(2)} (${p.desconto}% off)`);
  });



// EXERCÍCIO 5: ENCONTRAR PRODUTO MAIS CARO

function produtoMaisCaro(produtos) {
    return produtos.reduce((maisCaro, atual) => {
        return atual.preco > maisCaro.preco ? atual : maisCaro;
    });
}

// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);



// EXERCÍCIO 6: LISTAR NOMES DOS PRODUTOS

function listarNomes(produtos) {
    return produtos.map(p => p.nome);
}
console.log("\n=== EXERCÍCIO 6 ===");
const nomes = listarNomes(produtos);
console.log("Lista de produtos:");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));



// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE

function produtosCarosDisponiveis(produtos) {
    return produtos.filter(p => p.preco > 300 && p.estoque > 0);
}

// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));



// EXERCÍCIO 8: MÉDIA DE PREÇOS POR CATEGORIA

function mediaPrecoPorCategoria(produtos) {
    const categorias = [...new Set(produtos.map(p => p.categoria))]; // categorias únicas

    const resultado = {};

    categorias.forEach(categoria => {
        const itensDaCategoria = produtos.filter(p => p.categoria === categoria);
        
        const soma = itensDaCategoria.reduce((total, prod) => total + prod.preco, 0); //.reduce() é um “acumulador”.
        
        const media = soma / itensDaCategoria.length; //quantidade de elementos

        resultado[categoria] = media;
    });

    return resultado;
}

// Testes:
console.log("\n=== EXERCÍCIO 8 ===");
const medias = mediaPrecoPorCategoria(produtos);
Object.entries(medias).forEach(([categoria, media]) => {
  console.log(`Preço médio - ${categoria}: R$ ${media.toFixed(2)}`);
});



// EXERCÍCIO 9: TOP 3 PRODUTOS MAIS CAROS

function top3MaisCaros(produtos) {
    // cria uma cópia (para não alterar o array original)
    const ordenados = [...produtos].sort((a, b) => b.preco - a.preco); //Ordenando do maior para o menor

    // retorna apenas os 3 primeiros
    return ordenados.slice(0, 3);
}

// Testes:
console.log("\n=== EXERCÍCIO 9 ===");
const top3 = top3MaisCaros(produtos);
console.log("Top 3 produtos mais caros:");
top3.forEach((p, i) => {
  console.log(`${i + 1}º - ${p.nome}: R$ ${p.preco}`);
});



// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE (DESAFIO)
function estatisticasEstoque(produtos) {

    const totalProdutos = produtos.length;

    // produtos com estoque > 0
    const totalEmEstoque = produtos.filter(p => p.estoque > 0).length;

    // produtos sem estoque
    const totalEmFalta = produtos.filter(p => p.estoque === 0).length;

    // valor total do estoque (preço × estoque)
    const valorTotal = produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);

    // preço médio dos produtos
    const precoMedio = produtos.reduce((acc, p) => acc + p.preco, 0) / produtos.length;

    // mais caro
    const produtoMaisCaro = produtos.reduce((maisCaro, p) =>
        p.preco > maisCaro.preco ? p : maisCaro
    );

    // mais barato
    const produtoMaisBarato = produtos.reduce((maisBarato, p) =>
        p.preco < maisBarato.preco ? p : maisBarato
    );

    // categorias únicas
    const categorias = [...new Set(produtos.map(p => p.categoria))];

    return {
        totalProdutos,
        totalEmEstoque,
        totalEmFalta,
        valorTotal,
        precoMedio,
        produtoMaisCaro,
        produtoMaisBarato,
        categorias
    };
}


console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);
