class Card {
    constructor()
    {
    }
    show()
    {

    }

}

function Shuffle() {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}

function generateCards() {
    let ImageNames = [
        "Owl",
        "Cow",
        "Panda",
        "Bee",
        "Fish",
        "Monkey",
        "Moose",
        "Penguin",
        "Seal",
        "Whale",
        "Worm",
        "Zebra",
    ];
    let cardsWithImg = [];
    // Create a pair for each different name
// && i < cards.length / 2;
    for (let i = 0; i < ImageNames.length ; i++) {
        let cardFront1 = new Image();
        let cardFront2 = new Image();
        cardFront1.addEventListener("click", displayCard);
        cardFront2.addEventListener("click", displayCard);
        cardFront1.src = "Imgs/" + ImageNames[i] + ".jpg";
        cardFront2.src = "Imgs/" + ImageNames[i] + ".jpg";
        cardFront1.id = i;
        cardFront2.id = i;
        cardFront1.classList.add("card-value");
        cardFront2.classList.add("card-value");
        cardsWithImg.push(cardFront1);
        cardsWithImg.push(cardFront2);
    }
    for (let i = 0; i < cardsWithImg.length; i++){
        let canvas = document.getElementById("card" + i);
        let ctx = canvas.getContext("2d");
        let img = cardsWithImg[i];

        img.onload = () => {
            ctx.drawImage(img,0,0)
        }

    }

}
