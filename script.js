function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')){ //Se oq está dentro do parenteses for verdadeiro, execute a linha de baixo
        html.classList.remove('light')
    }   else{
        html.classList.add('light') //Se for falso, execute isto
    }

    // html.classList.toggle('light') //O toogle faz o papel de td o código, ele add e remove

    
    const img = document.querySelector('#profile img') // Pegar a tag img

    if (html.classList.contains('light')) { //Se tiver a tag light, adicionar a img cinza
        img.setAttribute("src", "./img/giovanicinza.png")
    } else {
        img.setAttribute("src", "./img/giovani verde.png") //Se não tiver a tag light, adicionar a img verde
    }
}