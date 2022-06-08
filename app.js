let questionsHTML = [
    {
        "id": "1",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "2",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "Was versteht man unter dem a Tag?",
            "D": "Antwort 4"
        },
        "right_answer": "D"
    },
    {
        "id": "3",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "4",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "5",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "6",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "7",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "8",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "9",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    },
    {
        "id": "10",
        "category": "HTML",
        "question": "Wofür steht HTML?",
        "answers": {
            "A": "Antwort 1",
            "B": "Antwort 2",
            "C": "HTML steht für Hypertext Markup Language.",
            "D": "Antwort 4"
        },
        "right_answer": "C"
    }
]

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    
    startScreen();
    //endScreen();
    //renderMainCard();
}

function startScreen() {
    let startScreen = document.getElementById("mainCard");
    startScreen.innerHTML = "";

    startScreen.innerHTML = /*html*/ `
        <h1>Herzlich Willkommen!</h1>
        <span>Quiz starteten ...</span>
        <button onclick="start()" id="start_btn" class="btn btn-primary btn-lg" role="button">
        Jetzt starten
        </button>
    `;
}

function start() {
    renderMainCard();
}

function renderMainCard() {

    if (currentQuestion >= questionsHTML.length) {
        endScreen();
    } else {

        let question = questionsHTML[currentQuestion];

        let mainCard = document.getElementById("mainCard");
        mainCard.innerHTML = ""; 

        mainCard.innerHTML = /*html*/ `
            <div class="progress">
                <div class="progress-bar" id="progress-bar" role="progressbar" style="width: 0%;">0%</div>
            </div>
            <div id="question" class="jumbotron" >
                <h2>Frage <span id="qno">${question['id']}</span></h2>
                <div class="mb-4">${question['question']}</div>
            </div>
            <div class="row answer">
                <div id="answer_A" class="card">
                    <div class="card-body" onclick="answer('answer_A')">${question['answers'].A}</div>
                </div>
                <div id="answer_B" class="card">
                    <div class="card-body" onclick="answer('answer_B')">${question['answers'].B}</div>
                </div>
                <div id="answer_C" class="card">
                    <div class="card-body" onclick="answer('answer_C')">${question['answers'].C}</div>
                </div>
                <div  id="answer_D" class="card">
                    <div class="card-body" onclick="answer('answer_D')">${question['answers'].D}</div>
                </div>
                <div class="bottomCard">
                <div class="counter">
                    <span><b id="questionNumber">1</b> von <b id="all-questions"></b> Fragen</span>
                </div>
                <div class="nextQuestion">
                    <button onclick="nextQuestion()" id="nextButton" class="btn btn-primary" disabled>nächste Frage</button>
                </div>
            </div>
        `;
        document.getElementById('all-questions').innerHTML = questionsHTML.length;
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;

        let percent = (currentQuestion + 1) / questionsHTML.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;
    }
}

function answer(selection) {
    let question = questionsHTML[currentQuestion]; // currentQuestion = 0. s.Oben

    let selectedQuestionLetter = selection.slice(-1); // letztes Zeichen aus dem String selection (onclick(parameter))

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionLetter == question['right_answer']) { // Vergleich
        rightQuestions++;
        document.getElementById(selection).classList.add('bg-success');
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    renderMainCard();
    
}

function resetAnswerButtons() {
    document.getElementById('answer_A').classList.remove('bg-success');
    document.getElementById('answer_A').classList.remove('bg-danger');
    document.getElementById('answer_B').classList.remove('bg-success');
    document.getElementById('answer_B').classList.remove('bg-danger');
    document.getElementById('answer_C').classList.remove('bg-success');
    document.getElementById('answer_C').classList.remove('bg-danger');
    document.getElementById('answer_D').classList.remove('bg-success');
    document.getElementById('answer_D').classList.remove('bg-danger');
}

function endScreen() {
    document.getElementById("mainCard").innerHTML = "";

    document.getElementById("mainCard").innerHTML = /*html*/ `
        <div id="trophy">
            <img src="./img/tropy.png" alt="">
        </div>
        <div id="result">
            <img src="./img/brain_result.png" alt="">
        </div>
        <h1>Das Quiz ist vorbei!</h1>
        <div id="points">
            Dein Punktestand ist: <b id='endpoints'>0</b> von
            <b id="possiblepoints">0</b>
        </div>
        <button onclick="restart()" class="restart btn btn-primary btn-lg" role="button">
            Nochmal starten
        </button>
    `;
    document.getElementById('possiblepoints').innerHTML = questionsHTML.length;
    document.getElementById('endpoints').innerHTML = rightQuestions;
}

function restart() {
    document.getElementById("mainCard").innerHTML = "";
    currentQuestion = 0;
    rightQuestions = 0;
    renderMainCard();
}

