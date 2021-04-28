
let dadosPostagem = []

function criarPost() {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")

    const postagem = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }

    dadosPostagem.push(postagem)

    const post = document.getElementById("container-de-posts")
    post.innerHTML += `<div> <h1>${titulo.value}</h1> <h4>${autor.value}</h4> <p>${conteudo.value}</p> </div>`
    console.log(post)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}