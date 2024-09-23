function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    let resultados = ""
    
    for (let dado of dados){
        resultados += `
        <div class="item-resultado">
                   <img src="${dado.imagem}" alt="imagem do veiculo">
                   <h2>
                       <A href="#" target="_blank">${dado.titulo}</A> 
                   </h2>
                   <p class="descricao-meta">${dado.descricao}</p>
                   <a href=${dado.link} target="_blank" title="Conheça mais sobre o Modelo">Clique aqui</a>
                 </div>
                 
    `
    }
    
    section.innerHTML = resultados
    
}


