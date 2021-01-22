var deck = [
    //Perguntas e Respostas
    {
        id: 0,
        questao: "Música?",
        videoSrc: "./videos/videoplayback(2).mp4",
        alternativa1: "Me dê motivo",
        alternativa2: "Azul da cor do mar",
        alternativa3: "Primavera",
        correta: 2
    },
    {
        id: 1,
        questao: "Cantor?",
        videoSrc: "./videos/videoplayback.mp4",
        alternativa1: "Mc Poze do Rodo",
        alternativa2: "Mc Daleste",
        alternativa3: "Cazuza",
        correta: 1
    },
    {
        id: 2,
        questao: "Música?",
        videoSrc: "./videos/videoplayback(5).mp4",
        alternativa1: "Lyoto",
        alternativa2: "Ilusões",
        alternativa3: "Kyoto",
        correta: 3
    },
    {
        id: 3,
        questao: "Cantor?",
        videoSrc: "./videos/videoplayback(4).mp4",
        alternativa1: "Kamau",
        alternativa2: "Duzz",
        alternativa3: "Felipe Ret",
        correta: 3
    },
    {
        id: 4,
        questao: "Música?",
        videoSrc: "./videos/videoplayback(3).mp4",
        alternativa1: "Exagerado",
        alternativa2: "O tempo não para",
        alternativa3: "Amor da minha vida",
        correta: 1
    },
    {
        id: 6,
        questao: "Cantor?",
        videoSrc: "./videos/videoplayback(6).mp4",
        alternativa1: "Edi Rock",
        alternativa2: "Mano Brown",
        alternativa3: "Sabotage",
        correta: 1
    },
    {
        id: 7,
        questao: "Música?",
        videoSrc: "./videos/videoplayback(7).mp4",
        alternativa1: "Natural",
        alternativa2: "Céu Azul",
        alternativa3: "Ela vai voltar",
        correta: 2
    },
    {
        id: 8,
        questao: "Cantor?",
        videoSrc: "./videos/videoplayback(8).mp4",
        alternativa1: "Mc Lipi",
        alternativa2: "Paulinho da Capital",
        alternativa3: "Mc Kadu",
        correta: 2
    },
    {
        id: 8,
        questao: "Musica?",
        videoSrc: "./videos/videoplayback(9).mp4",
        alternativa1: "Ilusão",
        alternativa2: "Orochi",
        alternativa3: "Balão",
        correta: 3
    },
    ]

var vid = document.getElementById("video");
vid.volume = 0.2;

var maxQuestions = 9
var pontos = 0;
var currentQuestion = 0;

function carregaRecord() {
    let campoRecord = document.getElementById("record");
    campoRecord.textContent = 0;
    localStorage.getItem("pontos");
    if (localStorage.getItem("record") != null ||
        localStorage.getItem("record") != undefined) {
        campoRecord.textContent = localStorage.getItem("record");
    }

}


function iniciaJogo(id) {
    let card = document.getElementById("card");
    card.innerHTML =
        `
        <h2 style="margin-bottom: -1%;font-size: 45px;">${deck[id].questao}</h2>
        <video style="margin-top:3%; border-radius: 20%;" width="50%" height="50%" id="video-1" alt="#" controls>
            <source src="${deck[id].videoSrc}" type="video/mp4">
        </video> <br>
        <div style="text-align: justify;background-color: width: 100%; margin-left: 30%">
        <input onclick="verificaResposta(1)" type="radio" name="resp-1" id="resp-2"><label style = "color: black;font-size: 120%;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: oblique;font-weight:bolder;font-stretch: condensed;font-variant: small-caps;">${deck[id].alternativa1}</label><br>
        <input onclick="verificaResposta(2)" type="radio" name="resp-1" id="resp-2"><label style = "color: black;font-size: 120%;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: oblique;font-weight:bolder;font-stretch: condensed;font-variant: small-caps;">${deck[id].alternativa2}</label><br>
        <input onclick="verificaResposta(3)" type="radio" name="resp-1" id="resp-3"><label style = "color: black;font-size: 120%;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: oblique;font-weight:bolder;font-stretch: condensed;font-variant: small-caps;">${deck[id].alternativa3}</label><br>
        </div><br>
        <a style="text-shadow: 2px 2px 25px hotpink;font-family: arial;">Pontuação: ${pontos} <br> ${correta}</a>
        `
}


correta = ""

function verificaResposta(alt) {
    if (deck.length == 0 || currentQuestion >= maxQuestions ) 
    {
        localStorage.setItem('mostRecentScore', pontos);
        
        // Ir pra pag end.html
        return window.location.assign('./end.html')   
    }
    else if (alt == deck[currentQuestion].correta) {
        console.log("resposta correta")
        currentQuestion++
        pontos += 30;
        correta = "Resposta correta!!!"
        iniciaJogo(currentQuestion)
        console.log(pontos)
    }
    else {
        console.log("resposta incorreta")
        currentQuestion++
        correta = "Resposta Incorreta :( :("
        iniciaJogo(currentQuestion)
    }
}

iniciaJogo(0);

// function iniciaScore() {}
// function novoRecord() {
//     localStorage.setItem("record", pontuacaoAtual)
    
// }

// function rodarecord() {
//     card.innerHTML = "Record Atual: "
// }


// const questao = document.getElementById("questao")
// const alternativas = Array.from(document.getElementsByName("resp"));
// const videoSrc = document.getElementById('video')
// const card = document.getElementById('card')
// let aceitaQuestao = true;
// let score = 0;
// let contadorQuestao = 0;
// let questoesDisponiveis = [];

// const maxQuestao = 5;



// function iniciaJogo() {
//     contadorQuestao = 0;
//     score = 0;
//     questoesDisponiveis = [...deck];
//     console.log(questoesDisponiveis)
//     carregaQuestao();
// }

// function carregaQuestao() {
//     contadorQuestao++;
//     const questaoIndex = Math.floor(Math.random() * questoesDisponiveis.length);
//     currentQuestion = questoesDisponiveis[questaoIndex];
//     questao.innerHTML = currentQuestion.questao;

//     alternativas.forEach(function(alternativa) {
//         const number = alternativa.dataset['number'];
//         alternativa.innerHTML = currentQuestion['alternativa' + number];
//     });

// card.innerHTML = `<video style="margin-top:3%; border-radius: 20%;" width="50%" height="50%" id="video-1" alt="#" controls><source src="${deck[2].videoSrc}" type="video/mp4"> `
// }
