"use strict";
var exibirPosts;
var posts = [
  // Definição do array dos objetos dos posts
  {
    id: 1,
    title: "Power Windows",
    imageUrl:
      "https://roadie-metal.com/wp-content/uploads/2020/10/power-windows-cover-600x600-1.jpg",
    body: "Release Year - 1985",
  },
  {
    id: 2,
    title: "Moving Pictures",
    imageUrl: "https://i.redd.it/l00qtvv1kg661.jpg",
    body: "Release Year - 1981",
  },
  {
    id: 3,
    title: "Signals",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/Rush_Signals.jpg",
    body: "Release Year - 1982",
  },
  {
    id: 4,
    title: "Hold Your Fire",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/Rush_Hold_Your_Fire.jpg",
    body: "Release Year - 1987",
  },
];

function exibirPosts() {
  var elementoPost = document.getElementById("posts");
  elementoPost.innerHTML = ""; // Parte da função para interagir com a id posts
  //Limpar o conteúdo e esvaziar a variável

  for (var i = 0; i < posts.length; i++) {
    //Definição do ciclo de repetição para alimentar os posts na página
    var post = posts[i];
    var postHtml = `
        <section>
          <h2>${post.title}</h2>
          <a href="post${post.id}.html" title="${post.title} - More Details">
            <img src="${post.imageUrl}" class="images" alt="${post.title} Cover" />
          </a>
          <h3>${post.body}</h3>
        </section>
      `;
    elementoPost.innerHTML += postHtml;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  //Chmada de evento para careregar a página antes dos posts.
  exibirPosts();
});
