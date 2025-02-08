// Variável para o áudio de fundo
var backgroundAudio = new Audio("love-like-you-end-credits-karaoke-version.mp3");
backgroundAudio.loop = true; // Repetir a música
backgroundAudio.volume = 0.5; // Volume inicial (50%)

// Função para mutar/desmutar a música
document.getElementById('mute-button').addEventListener('click', function () {
    backgroundAudio.muted = !backgroundAudio.muted;
    this.innerText = backgroundAudio.muted ? "🔊 Unmute" : "🔇 Mute";
});

// Função para ajustar o volume
document.getElementById('volume-slider').addEventListener('input', function () {
    backgroundAudio.volume = this.value;
    backgroundAudio.muted = false; // Desmutar ao ajustar o volume
    document.getElementById('mute-button').innerText = "🔇 Mute";
});

// Iniciar a música ao interagir com a página
document.addEventListener('click', function () {
    backgroundAudio.play().catch(function (error) {
        console.log("A reprodução automática foi bloqueada. Clique em qualquer parte da página para iniciar a música.");
    });
    document.removeEventListener('click', arguments.callee);
});

// Função para lidar com os cliques nos botões
function selectOption(option) {
    if (option === 'sim') {
        alert("Ainda bem que sim, totó 🙄");

        // Mostra a celebração
        showCelebration(function () {
            document.getElementById('question').classList.add('hidden');
            document.getElementById('options').classList.add('hidden');
            displayCatHeart();

            // Mostra as secções adicionais
            document.getElementById('memories-container').classList.remove('hidden');
            document.getElementById('quiz-container').classList.remove('hidden');
            document.getElementById('time-together').classList.remove('hidden');
        });
    } else if (option === 'não') {
        document.getElementById('no-button').innerText = 'tens a certeza?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = parseFloat(currentFontSize) * 2 + 'px';
    }
}

// Função para mostrar a celebração
function showCelebration(callback) {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(function () {
        if (callback) callback();
    }, 2000);
}

// Função para mostrar a imagem do gato inicial
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat-rose.png';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Função para mostrar a imagem do gato com coração
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);

        var textElement = document.createElement("div");
        textElement.innerText = "obrigado parvinha amo-te muito";
        textElement.style.fontSize = "30px";
        textElement.style.fontWeight = "bold";
        textElement.style.color = "#ff69b4";
        textElement.style.textShadow = "3px 3px 10px rgba(255, 105, 180, 0.5)";
        textElement.style.marginTop = "20px";
        textElement.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
        imageContainer.appendChild(textElement);

        document.getElementById('options').style.display = 'none';

        var audio = new Audio("yippee-tbh.mp3");
        audio.play();
    };
}

// Efeito de movimento no botão "Não"
document.getElementById('no-button').addEventListener('mouseover', function () {
    var button = this;
    var container = document.getElementById('container');
    var containerRect = container.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    var randomX = Math.random() * (containerRect.width - buttonRect.width);
    var randomY = Math.random() * (containerRect.height - buttonRect.height);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

// Quiz
function checkAnswer(answer) {
    var result = document.getElementById('quiz-result');
    if (answer === 'Siimm') {
        result.innerText = "mwahh 😽";
    } else if (answer === 'Não.') {
        result.innerText = "desculpa então.";
    } else {
        result.innerText = "yh wtv😒 (still massive btw)";
    }
}

// Contador de tempo juntos
function updateTimeTogether() {
    var startDate = new Date('2024-12-30');
    var today = new Date();
    var diff = today - startDate;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    document.getElementById('time-counter').innerText = years + " anos, " + (months % 12) + " meses e " + (days % 30) + " dias!";
}
updateTimeTogether();

// Mostra a imagem do gato inicial
displayCat();