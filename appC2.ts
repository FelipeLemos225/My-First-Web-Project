interface Comments2 {
    //Definição de uma interface de como serão os objetos
    id: number;
    postId: number;
    email: string;
    body: string;
    name: string;
  }
  
  let exibirComments2: () => void;
  
  const comments2 = [
    // Definição do array dos objetos dos posts
    {
      id: 1,
      postId: 2,
      email: "jrkeys@gmail.com",
      body: "An Amazing Masterpiece!",
      name: "Jordan Rudess",
    },
  
    {
      id: 2,
      postId: 2,
      email: "jmybass@gmail.com",
      body: "An amazing record! One of the best albuns of all time.",
      name: "John Myoung",
    },
  ];
  
  exibirComments2 = () => {
    const elementoComment = document.getElementById("comments2")!; //Não é null!
    elementoComment.innerHTML = ""; // Parte da função para interagir com a id comentários
    //Limpar o conteúdo e esvaziar a variável
  
    for (let i = 0; i < comments2.length; i++) {
      //Definição do ciclo de repetição para alimentar os comentários na página
      const comment = comments2[i];
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
    exibirComments2();
  });
  