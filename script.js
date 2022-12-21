function coracao(id){
    const coracaoVazio = document.getElementById(id);
    coracaoVazio.innerHTML = ""
    const coracaoCheio = document.createElement("img");
    coracaoCheio.src = "./src/heart-svgrepo-com.svg";
    coracaoVazio.append(coracaoCheio);
    console.log(coracaoVazio);
}