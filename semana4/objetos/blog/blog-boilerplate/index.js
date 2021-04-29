
let dadosPostagem = []

function criarPost() {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const imagem = document.getElementById("img-post")

    let tamanhoLink = imagem.value.length
    let verificaPngJpg = imagem.value.slice(tamanhoLink-4, tamanhoLink)


    if (titulo.value !== "" && autor.value !=="" && conteudo.value !=="" ) {
        const postagem = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
        }

        dadosPostagem.push(postagem)

        const post = document.getElementById("container-de-posts")

        if ((tamanhoLink > 0) && (verificaPngJpg === ".jpg" || verificaPngJpg === ".png")) {
            post.innerHTML += `<div> <h1>${titulo.value}</h1> <h4>${autor.value}</h4> <p>${conteudo.value}</p> <img src="${imagem.value}" alt="Imagem sobre ${titulo.value}"> </div>` 
        } else {
            post.innerHTML += `<div> <h1>${titulo.value}</h1> <h4>${autor.value}</h4> <p>${conteudo.value}</p> </div>`
        }
    } else {
        alert("Preencha os campos obrigatórios (*)")
    }

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
}