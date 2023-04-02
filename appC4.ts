interface Comments4 {
    //Definição de uma interface de como serão os objetos
    id: number;
    postId: number;
    email: string;
    body: string;
    name: string;
  }
  
  let exibirComments4: () => void;
  
  const comments4 = [
    // Definição do array dos objetos dos posts
    {
      id: 1,
      postId: 4,
      email: "kkgslayer@gmail.com",
      body: "That album made my life better!",
      name: "Kerry King",
    },
  
    {
      id: 2,
      postId: 4,
      email: "felipebass@gmail.com",
      body: "What a incredible piece of work from the Band!",
      name: "Felipe Andreolli",
    },
  ];
  
  exibirComments4 = () => {
    const elementoComment = document.getElementById("comments4")!; //Não é null!
    elementoComment.innerHTML = ""; // Parte da função para interagir com a id comentários
    //Limpar o conteúdo e esvaziar a variável
  
    for (let i = 0; i < comments4.length; i++) {
      //Definição do ciclo de repetição para alimentar os comentários na página
      const comment = comments4[i];
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
    exibirComments4();
  });
  