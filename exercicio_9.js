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