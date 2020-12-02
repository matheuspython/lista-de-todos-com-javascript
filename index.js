var lista = document.querySelector('#app ul')
var input = document.querySelector('input[type=text]')
var botao = document.querySelector('button')

var tarefas = ['comer', 'se exercitar', 'programar']




function adiciona() {
    var tamanho = document.querySelectorAll('a')
        /* adicionando botao de excluir */
    var novoA1 = document.createElement('a')
    var textoa = document.createTextNode('excluir')
    novoA1.setAttribute('href', '#')
    novoA1.setAttribute('onclick', 'excluir(' + tamanho.length + ')')
    novoA1.appendChild(textoa)
        /*fim */
        /* pegando o valor do inputText e colocando na lista */
    var valorDoText = input.value
    var text = document.createTextNode(valorDoText)
    var novoLi1 = document.createElement('li')
    novoLi1.appendChild(text)
    novoLi1.appendChild(novoA1)
    lista.appendChild(novoLi1)
        /* fim */
}



function prencherLista() {
    for (var i = 0; i < tarefas.length; i++) {

        var tamanho1 = document.querySelectorAll('a')
        var tarefa = document.createTextNode(tarefas[i])
        var novoLi = document.createElement('li')
        var novoA = document.createElement('a')
        var TextoDoA = document.createTextNode('excluir')

        novoA.setAttribute('href', '#')
        novoA.setAttribute('onclick', 'excluir(' + tamanho1.length + ')')
        novoA.appendChild(TextoDoA)

        novoLi.appendChild(tarefa)
        novoLi.appendChild(novoA)
        lista.appendChild(novoLi)
    }
}

function excluir(a) {
    console.log(a)

    var quantidadeDeLi = document.querySelectorAll('li')
    lista.removeChild(quantidadeDeLi[a])

}
prencherLista()