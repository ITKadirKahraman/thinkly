const createMainCard = () => {
    const mainCard = document.getElementById('newCard');
    mainCard.innerHTML = 
    `<header>
        <nav class="newCardHeaderNav">
            <span class="newNodeHeadline"><strong>Neue <br> Notiz</strong></span>
            <img class="notizenblock" src="./assets/img/notiz.svg" alt="Notizenblock">
        </nav>
    </header>
    <article>
        <h2 class="h2Newcard">Brainstorming</h2>
        <p class="pNewCard">Deine Ideen verdienen einen Platz. <br>
        Halte hier dein Brainstorming fest, plane deine 
        To-Dos und bring deine Kreativität zum Fließen.
        </p>
    </article>
    <button class="addNewCard" id="addNewCard">
        <nav class="newCardNav">
            <img src="./assets/img/squarePlus.svg" alt="Neue Notiz">
            <p><h2 class="newNotiz">Neue Notiz erstellen</h2></p>
        </nav>
    </button>`;
}

createMainCard();

const createCard = () => {
    const card = document.getElementById('card');
    card.innerHTML = 
    `
    <header class="cardHeader" id="cardHeader">
        <h2 id="thema">placeholder</h2>
    </header>
    <article>
        <input class="input" type="text" id="textField" placeholder="Schreib...">
    </article>
    <nav class="cardNav">
        <button class="btn arrowLeft" id="arrowLeft">
            <img src="./assets/img/circleArrowLeft.svg" alt="Zum vohrigen Notiz">
        </button>
        <span id="dynamicNumber">placeholder</span>
        <button class="btn arrowRight" id="arrowRight">
            <img src="./assets/img/circleArrowRight.svg" alt="Zum nächsten Notiz">
        </button>
        <button class="btn" id="addFolder">
            <img src="./assets/img/folderPlus.svg" alt="Einen Ordner hinzufügen">
        </button>
    </nav>
    `;
};

createCard();

const createFooter = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="footerContainer">
            <nav class="me">
                <h2>Kadir Kahraman</h2>
                <a href="https://www.instagram.com/kdir.khrmn?igsh=aG8yMnBrNG9leWhs&utm_source=qr"><img src="./assets/icons/instagram.svg" alt="Instagram"></a>
                <a href="https://www.linkedin.com/in/kadirkahramaninfo?utm_source=share_via&utm_content=profile&utm_medium=member_ios"><img src="./assets/icons/linkedIn.svg" alt="LinkedIn"></a>
            </nav>
            <nav class="icons">
                <h2>Meine Seiten</h2>
                <a href="https://github.com/ITKadirKahraman"><img src="./assets/icons/github.svg" alt="GitHub"></a>
                <a href="https://coddy.tech/user/Kadir"><img src="./assets/icons/coddy.png" alt="Coddy"></a>
                <a href="https://leetcode.com/u/kadirkahraman/"><img src="./assets/icons/leetcode.svg" alt="leetCode"></a>
                <a href="https://www.codewars.com/users/ITKadirKahraman"><img src="./assets/icons/codewars.svg" alt="CodeWars"></a>
            </nav>
        </div>`;
}
createFooter();
