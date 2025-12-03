// Lista de produtos
const produtos = [
    { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletronicos", estoque: 5, desconto: 0 },
    { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletronicos", estoque: 15, desconto: 10 },
    { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletronicos", estoque: 0, desconto: 0 },
    { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "moveis", estoque: 8, desconto: 15 },
    { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "moveis", estoque: 3, desconto: 0 },
    { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletronicos", estoque: 10, desconto: 5 },
    { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletronicos", estoque: 0, desconto: 0 },
    { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletronicos", estoque: 12, desconto: 20 },
    { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletronicos", estoque: 20, desconto: 0 },
    { id: 10, nome: "Estante para Livros", preco: 420, categoria: "moveis", estoque: 5, desconto: 10 }
];
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
