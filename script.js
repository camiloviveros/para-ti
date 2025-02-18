const messages = [
    "Esta segura?, no me diga que no 😔",
    "Realmente segura ??😖",
    "No quiero que digas que no 😢 ",
    "Poofavoooo nooooo... 😑",
    "Lo puedes pensar? 😟",
    "Estaré muy triste...😢",
    "No quiero que nunca te vayas, lo puedes pensar?😣",
    "Estaré muy muy muy triste...😟",
    "Está bien, dejaré de preguntar...😞",
    "¡Es broma, di que sí, por favor! porfavorrrrrr? ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}