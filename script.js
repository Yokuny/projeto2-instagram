function coracao(id) {
  const coracaoCheio = document.createElement("img");
  coracaoCheio.src = "./src/heart-svgrepo-com.svg";
  const coracaoVazio = document.getElementById(id);
  coracaoVazio.innerHTML = "";
  coracaoVazio.append(coracaoCheio);
}
function salvar(id) {
  const bookmarkFeito = document.createElement("img");
  bookmarkFeito.src = "./src/bookmark-svgrepo-com.svg";
  const bookmarkVazio = document.getElementById(id);
  bookmarkVazio.innerHTML = "";
  bookmarkVazio.append(bookmarkFeito);
}
function comentar(id) {
  const userNameH4 = document.createElement("h4");
  userNameH4.textContent = "iso.profile";

  const userComentP = document.createElement("p");
  userComentP.textContent = document.getElementById(id).value;
  document.getElementById(id).value = "";

  const heartIcon = document.createElement("div");
  heartIcon.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';

  const justDiv = document.createElement("div");
  justDiv.appendChild(userNameH4);
  justDiv.appendChild(userComentP);

  const divForTheNewElements = document.createElement("div");
  divForTheNewElements.classList.add("theComment");
  divForTheNewElements.appendChild(justDiv);
  divForTheNewElements.appendChild(heartIcon);

  const divThatHoldEverything = document.createElement("div");
  divThatHoldEverything.classList.add("newComment");
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
