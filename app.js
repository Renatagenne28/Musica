function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o usuário digitou algum termo de pesquisa
    if (!campoPesquisa) {
      // Exibe uma mensagem de erro caso o campo esteja vazio
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do cantor, banda ou música.</p>";
      return;
    }
  
    // Converte o termo de pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado (artista) e verifica se o termo de pesquisa está presente
    for (let dado of dados) {
      // Converte os campos do objeto para minúsculas para facilitar a comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em algum dos campos
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um elemento HTML para exibir os resultados
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.estiloMusical}</p>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.musicaMaisTocada} <a href="${dado.linkMusica}"target="_blank"> ouvir </a></p>
            <a href=${dado.link} target="_blank"> Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados e exibe a mensagem apropriada
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza a seção de resultados com o HTML gerado
    section.innerHTML = resultados;
  }