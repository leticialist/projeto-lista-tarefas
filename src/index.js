function adicionar() {
    let item = document.querySelector('#item')
    let itemDigitado = item.value
    let lista = document.querySelector('#lista')

    if((!itemDigitado)) {
        alert('Digite uma tarefa.')
    } else {
        lista.innerHTML += `<p>
        <input type="checkbox"> 
        <span>${itemDigitado} </span>
        <button onclick="removerElemento(this)">X</button></p>`
    }
    item.value = ''
    item.focus()
}

function removerElemento(el){
    const elemento = el.target;
    el.parentNode.remove();
}