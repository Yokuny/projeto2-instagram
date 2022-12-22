function coracao(id){
    const coracaoVazio = document.getElementById(id);
    coracaoVazio.innerHTML = ""
    const coracaoCheio = document.createElement("img");
    coracaoCheio.src = "./src/heart-svgrepo-com.svg";
    coracaoVazio.append(coracaoCheio);
}
function salvar(id){
    const bookmarkVazio = document.getElementById(id);
    bookmarkVazio.innerHTML = ""
    const bookmarkFeito = document.createElement("img");
    bookmarkFeito.src = "./src/bookmark-svgrepo-com.svg";
    bookmarkVazio.append(bookmarkFeito);
}
function comentar(id){
    
}