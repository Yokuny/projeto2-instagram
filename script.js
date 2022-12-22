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
    const divThatHoldEverything = document.createElement("div");
    divThatHoldEverything.classList.add("newComment");
    const divForTheNewElements = document.createElement("div");
    divForTheNewElements.classList.add("theComment");
    const justDiv = document.createElement("div");
    const userNameH4 = document.createElement("h4");
    userNameH4.textContent = "iso.profile";
    const userComentP = document.createElement("p");
    userComentP.textContent = document.getElementById(id).value
    document.getElementById(id).value = '';
    const heartIcon = document.createElement("div");
    heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    justDiv.appendChild(userNameH4);
    justDiv.appendChild(userComentP);
    divForTheNewElements.appendChild(justDiv);
    divForTheNewElements.appendChild(heartIcon);
    divThatHoldEverything.appendChild(divForTheNewElements);
    document.getElementById(`comentField-id-${id}`).appendChild(divThatHoldEverything);
/*
    <div id="comentField-id-rrbbh">

        <div id="comentField-id-rrbbh">

            <div class="newComment">
                <div class="theComment">
                    <div>
                        <h4>yokuny</h4><p>What's your method for sharing the project with the client?</p>
                    </div>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
*/

}