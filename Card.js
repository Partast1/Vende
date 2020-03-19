class Card {
    constructor()
    {
    }
    show()
    {

    }

}
let card = document.getElementsByClassName("Card");
let cards = [...card];
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", displayCard);
};

// var displayCard = function (){
//     this.classList.toggle("open");
//     this.classList.toggle("show");
//     this.classList.toggle("disabled");
// };
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
var GenerateImages = function () {
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'Imgs/Cow.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = 'Imgs/Owl.jpg';

    imgArray[2] = new Image();
    imgArray[2].src = 'Imgs/Panda.jpg';
};
var GenerateMap2 = function () {
    var canvas = document.getElementById("card2");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "Imgs/Cow.jpg";

    img.onload = () => {
        ctx.drawImage(img,0,0, 200, 200)
    }
};
function generateCards(game) {
    var names = [
        "smiley",
        "cat",
        "line",
        "cross",
        "star",
        "square",
        "triangle",
        "circle",
        "up-arrow",
        "left-arrow",
        "right-arrow",
        "down-arrow",
    ];
    var cardFaces = [];
    // Create a pair for each different name
    for (var i = 0; i < names.length && i < game.cardArray.length / 2; i++) {
        var cardFace1 = new Image();
        var cardFace2 = new Image();
        cardFace1.src = "assets/" + names[i] + ".png";
        cardFace2.src = "assets/" + names[i] + ".png";
        cardFace1.id = i;
        cardFace2.id = i;
        cardFace1.classList.add("card-value");
        cardFace2.classList.add("card-value");
        cardFaces.push(cardFace1);
        cardFaces.push(cardFace2);
    }
    scrambleArray(cardFaces);
    for (var i = 0; i < game.cardArray.length; i++) {
        game.cardArray[i].id = cardFaces[i].id;
        getChildByClassName(game.cardArray[i], "card-front").appendChild(cardFaces[i]);
    }
}
