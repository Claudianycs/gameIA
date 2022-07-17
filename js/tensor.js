// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/6BFn4KAKX/";

let model, webcam, labelContainer, maxPredictions, score, scoretotal, mudar;


let time = 31;

// Load the image model and setup the webcam
async function solidos() {

    var img = new Array(
        "assets/solidos/solidos01.png",
        "assets/solidos/solidos02.png",
        "assets/solidos/solidos03.png",
        "assets/solidos/solidos04.png",
        "assets/solidos/solidos05.png",
        "assets/solidos/solidos06.png",
        "assets/solidos/solidos07.png");

    mudar = Math.floor(Math.random() * img.length);

    if (mudar == 0) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um prisma triangular é um prisma de três lados; é um poliedro feito de uma base triangular, uma cópia traduzida e 3 faces que unem os lados correspondentes. ";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/prisma.png'>";
    } else if (mudar == 1) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "O cone é um sólido geométrico obtido quando se tem uma pirâmide cuja base é um polígono regular, o número de lados da base tende ao infinito e a medida de lado do polígono tende a zero.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0002.png'>";
    } else if (mudar == 2) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Uma pirâmide quadrada é uma pirâmide que tem uma base quadrada. Se os lados da pirâmide são triângulos equiláteros e é um dos Sólidos de Johnson. Se o ápice está perpendicularmente acima do centro do quadrado, terá uma simetria C₄ᵥ. É constituída por 1 quadrado e 4 triângulos.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0003.png'>";
    } else if (mudar == 3) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "A esfera pode ser definida como uma sequência de pontos alinhados em todos os sentidos à mesma distância de um centro comum.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0004.png'>";
    } else if (mudar == 4) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Paralelepípedo ou bloco retangular é a designação dada a um prisma cujas faces são paralelogramos. Um paralelepípedo tem seis faces, sendo que duas são idênticas e paralelas entre si. Os paralelepípedos podem ser retos ou oblíquos, consoante as suas faces laterais sejam perpendiculares ou não à base.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0005.png'>";
    } else if (mudar == 5) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um cubo ou hexaedro regular é um poliedro com 6 faces congruentes. Além disso, é um dos cinco sólidos platônicos, pois: cada face tem 4 arestas; de cada vértice partem 3 arestas; vale a relação de Euler: {V-A+F=2}, onde V representa o número de vértices, A o número de arestas e F o número de faces.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0006.png'>";
    } else if (mudar == 6) {
        document.getElementById("imagem-solido").innerHTML = "<img src='" + img[mudar] + "'>";
        document.getElementById("texto-solido").innerHTML = "Um cubo ou hexaedro regular é um poliedro com 6 faces congruentes. Além disso, é um dos cinco sólidos platônicos, pois: cada face tem 4 arestas; de cada vértice partem 3 arestas; vale a relação de Euler: {V-A+F=2}, onde V representa o número de vértices, A o número de arestas e F o número de faces.";
        document.getElementById("nav-solido").innerHTML = "<img src='assets/icons/solidos0007.png'>";
        
    } else {
        console.error(img);
    }

    var pontos = 0;
    pontos++;
    document.getElementById("score").innerHTML = "" + pontos;
}

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam

    if (screenWidth <= 360 && screenHeight <= 969) {
        webcam = new tmImage.Webcam(360, 360, flip); // width, height, flip
        await webcam.setup({ facingMode: "environment" }); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

    } else if (screenWidth > 360 || screenWidth <= 414 && screenHeight <= 969) {
        webcam = new tmImage.Webcam(375, 375, flip); // width, height, flip
        await webcam.setup({ facingMode: "environment" }); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
    } else {
        webcam = new tmImage.Webcam(1920, 800, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
    }

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);


    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }

}

/*------------------------TIMER GAMER------------------------------------ */


let btn = document.getElementById('codigo');


btn.addEventListener('click', () => {
    btn.disabled = true;
    counter = setInterval(() => {
        myTimer()
    }, 1000)
})

function myTimer() {
    time--;
    document.getElementById("timer").innerText = "" + time;
    if (time == 0) {

        gameover();
        btn.disabled = false;
        clearInterval(counter);
        time = 30;
    }
}


async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}


async function predict() {

    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
        if (prediction[i].probability > 0.94) {
            if (mudar == 0 && i == 0) {
                solidos();
                break;
            } else if (mudar == 1 && i == 1) {
                solidos();
            } else if (mudar == 2 && i == 2) {
                solidos();
                break;

            } else if (mudar == 3 && i == 3) {
                solidos();
                break;

            } else if (mudar == 4 && i == 4) {
                solidos();
                break;

            } else if (mudar == 5 && i == 5) {
                solidos();
                break;

            } else if (mudar == 6 && i == 6) {
                solidos();
                break;
            } else {
                document.getElementById("image").innerHTML = "<img src='assets/images/mensagem1.png' style='width: 350px'>";
            }
        }// fim if proba
        else {

        }


    }// fim if proba
}