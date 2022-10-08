function constroiCategoriaProdutos(categoria, produtos, permiteEditar = false) {
    let categoria = document.createElement("section");
    categoria.className = "categoria";

    return categoria;
}

function constroiListaProdutos(produtos, permiteEditar = false) {
    let lista = document.createElement("ul");
    lista.className = "produtos";
    produtos.array.forEach(produto => {
        lista.appendChild(constroiArticleProduto(produto, permiteEditar));
    });
    return lista;
}

function constroiArticleProduto(produto, permiteEditar = false) {
    let article = document.createElement("article");
    article.innerHTML = `
        <img src    ="  assets/img/produtos/${produto.imagem}" 
            srcset  ="  assets/img/produtos/${produto.imagem} 320w, 
                        assets/img/produtos/${getNomeImagemMaior(produto.imagem, 2)} 768w, 
                        assets/img/produtos/${getNomeImagemMaior(produto.imagem, 3)} 1024w" 
            alt="${produto.alt_img}"
            class="produto__imagem">
        <h3 class="produto__nome">${produto.nome}</h3>
        <p class="produto__preco">RS ${produto.preco}</p>
        <a href="#" class="produto__link">Ver produto</a>
    `;
    return article;
}


function getNomeImagemMaior(nomeImagem, nVezes) {
    return nomeImagem.replace(/(\.[^\.]+)$/, `@${nVezes}x$1`);
}
