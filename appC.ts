interface Comments {
  //Definição de uma interface de como serão os objetos
  id: number;
  postId: number;
  email: string;
  body: string;
  name: string;
}

let exibirComments: () => void;

const comments = [
  // Definição do array dos objetos dos posts
  {
    id: 1,
    postId: 1,
    email: "mkpdrum@gmail.com",
    body: "This is a fantastic register by the band. It's a conceptional album that elucidates the various forms of Power in life.",
    name: "Mike Portnoy",
  },

  {
    id: 2,
    postId: 1,
    email: "jpguitar@gmail.com",
    body: "An amazing record! One of the best albuns of all time.",
    name: "John Petrucci",
  },
];

exibirComments = () => {
  const elementoComment = document.getElementById("comments")!; //Não é null!
  elementoComment.innerHTML = ""; // Parte da função para interagir com a id comentários
  //Limpar o conteúdo e esvaziar a variável

  for (let i = 0; i < comments.length; i++) {
    //Definição do ciclo de repetição para alimentar os comentários na página
    const comment = comments[i];
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
  exibirComments();
});
