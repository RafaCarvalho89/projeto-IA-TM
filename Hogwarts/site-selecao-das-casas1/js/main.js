const MODEL_URL = "https://teachablemachine.withgoogle.com/models/_fKiORpSf/";
let model, webcam, labelContainer, maxPredictions;

window.onload = async () => {
    await init();
};

async function init() {
    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }

    document.getElementById("input").addEventListener('change', carregarImagem);
}

function carregarImagem() {
    let image = document.getElementById("input").files[0];
    let img = document.createElement("img");
    img.src = URL.createObjectURL(image);
    img.onload = async () => {
        img.width = 200;
        img.height = 200;
        document.getElementById("webcam-container").innerHTML = '';
        document.getElementById("webcam-container").appendChild(img);
        
        Previsao(img);
    };
}

async function Previsao(img) {
    labelContainer.innerHTML = '';

    const prediction = await model.predict(img);
    let maxProbability = -1;
    let maxClass = null;
    for (let i = 0; i < maxPredictions; i++) {
     
        if(prediction[i].className === "Grifinória"){
            const numberBar0 = prediction[i].probability * 100
            const numberBar0Txt = String(numberBar0); 
            const bar0 = document.getElementById("bar-fill-0")           
           
            const prob0 = document.getElementById('prob0')

            bar0.style.width = numberBar0Txt + "%"; 
           
            prob0.innerHTML = numberBar0.toFixed(2) + "%"

        }
        if(prediction[i].className === "Sonserina"){
            const numberBar1 = prediction[i].probability * 100
            const numberBar1Txt = String(numberBar1);
            const prob1 = document.getElementById('prob1') 
            const bar1 = document.getElementById("bar-fill-1")
           
            bar1.style.width = numberBar1Txt + "%";
            prob1.innerHTML = numberBar1.toFixed(2) + "%"
            
        }
        if(prediction[i].className === "Lufa-Lufa"){
            const numberBar2 = prediction[i].probability * 100
            const numberBar2Txt = String(numberBar2); 
            const bar2 = document.getElementById("bar-fill-2")
            const prob2 = document.getElementById('prob2') 
          
            
            bar2.style.width = numberBar2Txt + "%";
            prob2.innerHTML = numberBar2.toFixed(2) + "%"
            
           
        }
        if(prediction[i].className === "Corvinal"){
            const numberBar3 = prediction[i].probability * 100
            const numberBar3Txt = String(numberBar3); 
            const bar3 = document.getElementById("bar-fill-3")
            const prob3 = document.getElementById('prob3') 
            
            prob3.innerHTML = numberBar3.toFixed(2) + "%"
            bar3.style.width = numberBar3Txt + "%";
            
                       
        }
        if (prediction[i].probability > maxProbability) {
            maxProbability = prediction[i].probability;
            maxClass = prediction[i].className;
        }
        if(maxClass === "Grifinória" ){
            const imgCasa = document.getElementById('img-casa')
            const linkCasa = document.getElementById('link-casa')

            linkCasa.href = "../paginas/grifinoria.html"
            imgCasa.src = "./images/grifinoria.png"
            content = document.querySelector('.content')
            content.style.backgroundColor = '#A60311'
            content.style.backgroundImage = "url(./images/brilhoVermelho.gif)" 
        }
        else if(maxClass === "Sonserina" ){
            const imgCasa = document.getElementById('img-casa')
            const linkCasa = document.getElementById('link-casa')
                       
            linkCasa.href = "../paginas/sonserina.html"
            
            imgCasa.src = "./images/sonserina.webp"
            content = document.querySelector('.content')
            content.style.backgroundColor = '#04590A'
            content.style.backgroundImage = "url(./images/brilhoVerde.gif)" 
        }
        else if(maxClass === "Lufa-Lufa" ){
            const imgCasa = document.getElementById('img-casa')
            const linkCasa = document.getElementById('link-casa')

            linkCasa.href = "../paginas/lufa-lufa.html"
            imgCasa.src = "./images/lufa-lufa.png"
            content = document.querySelector('.content')
            content.style.backgroundColor = '#D9A404'
            content.style.backgroundImage = "url(./images/brilhoPreto.gif)" 
        }
        else if(maxClass === "Corvinal" ){
            const imgCasa = document.getElementById('img-casa')
            const linkCasa = document.getElementById('link-casa')

            linkCasa.href = "../paginas/corvinal.html"
            imgCasa.src = "./images/corvinal.png"
            content = document.querySelector('.content')
            content.style.backgroundColor = '#034C8C'
            content.style.backgroundImage = "url(./images/brilhoAzul.gif)" 
        }
        
    }
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<strong>Resultado Final: ${maxClass} (${(maxProbability * 100).toFixed(2)}%)</strong>`;
    labelContainer.appendChild(resultDiv);
    ocultar = document.querySelector('.ocultar')
    ocultar.style.display = "none"
    resultDiv.style.display = "flex"
    resultDiv.style.flexDirection = "column"
    resultDiv.style.alignItems = "center"
    colors = document.querySelector('.colors')
    colors.style.display = "none"
    main = document.querySelector('main')
    main.style.gridTemplateColumns = "100% 0%"

  
 }
