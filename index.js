var lista = document.querySelector('#app ul')
var input = document.querySelector('input[type=text]')
var botao = document.querySelector('button')

var tarefas = ['comer', 'se exercitar', 'programar']



function prencherLista() {
    for (var i = 0; i < tarefas.length; i++) {
        var tarefa = document.createTextNode(tarefas[i])
        var novoLi = document.createElement('li')
        var novoA = document.createElement('a')
        var TextoDoA = document.createTextNode('excluir')
        novoA.setAttribute('href', '#')
        novoA.appendChild(TextoDoA)


        novoLi.appendChild(tarefa)
        novoLi.appendChild(novoA)
        lista.appendChild(novoLi)
    }
}
prencherLista()