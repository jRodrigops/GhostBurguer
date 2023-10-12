document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    let tarefas = JSON.parse (localStorage.getItem("tarefas")) || [] 



const tarefa = {

    titulo: document.querySelector("#titulo").value, 
    descricao: document.querySelector("#descricao").value, 
    preco: document.querySelector("#preco").value
}

tarefas.push(tarefa)


    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    window.location.href = "index.html"
})