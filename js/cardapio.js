function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function criaLinha(cardapio){
    linha = document.createElement("tr");
    tdSegunda = document.createElement("td");
    tdTerca = document.createElement("td");
    tdQuarta = document.createElement("td");
    tdQuinta = document.createElement("td");
    tdSexta = document.createElement("td");

    tdSegunda.innerHTML = cardapio["Segunda-Feira"];
    tdTerca.innerHTML = cardapio["Ter\u00e7a-feira"]
    tdQuarta.innerHTML = cardapio["Quarta-feira"]
    tdQuinta.innerHTML = cardapio["Quinta-feira"];
    tdSexta.innerHTML = cardapio["Sexta-feira"]

    linha.appendChild(tdSegunda);
    linha.appendChild(tdTerca);
    linha.appendChild(tdQuarta);
    linha.appendChild(tdQuinta);
    linha.appendChild(tdSexta);

    return linha;
}

function main(){
    let data = fazGet("http://127.0.0.1:5000/retornaCardapio");
    let cardapio = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    let linha = criaLinha(cardapio);
    tabela.appendChild(linha);

    return
}


main()