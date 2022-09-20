function  confereSenha() {
    const senha = document.getElementById("senha").value; 
    const confirmar = document.getElementById("confirmaSenha").value;

    if(confirmar != senha){
        alert('As senhas não coincidem!');
        return false
    }
    else{
        alert("Cadastro feito com sucesso!");
        return true
    }
    

}