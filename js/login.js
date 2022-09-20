function  confereUsuario() {
    const usuario = document.getElementById("usuario").value; 
    const senha = document.getElementById("senha").value;

    if(usuario == "admin@gmail.com" && senha == "admin"){
        return true
    }
    else{
        alert("E-mail ou senha incorreto!");
        return false
    }
    

}