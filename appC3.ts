interface Comments3 {
    //Definição de uma interface de como serão os objetos
    id: number;
    postId: number;
    email: string;
    body: string;
    name: string;
  }
  
  let exibirComments3: () => void;
  
  const comments3 = [
    // Definição do array dos objetos dos posts
    {
      id: 1,
      postId: 3,
      email: "amvocal@gmail.com",
      body: "A Spetacular collection of music !",
      name: "André Mattos",
    },
  
    {
      id: 2,
      postId: 3,
      email: "timmok@gmail.com",
      body: "What a Great Album!",
      name: "Timmo Kotipelto",
    },
  ];
  
  exibirComments3 = () => {
    const elementoComment = document.getElementById("comments3")!; //Não é null!
    elementoComment.innerHTML = ""; // Parte da função para interagir com a id comentários
    //Limpar o conteúdo e esvaziar a variável
  
    for (let i = 0; i < comments3.length; i++) {
      //Definição do ciclo de repetição para alimentar os comentários na página
      const comment = comments3[i];
      const commentHtml = `
      <div>
      <h4>${comment.id}</h4>
      <h4 class="email">${comment.email}</h4>
          <p class="text-comment">${comment.body}</p>
          <footer class="signature">${comment.name}</footer>
          <hr>
        </div>
        `;
      elementoComment.innerHTML += commentHtml;
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    //Chmada de evento para careregar a página antes dos comentários.
    exibirComments3();
  });
  