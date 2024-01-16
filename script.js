let questions = [
    {
        "question": "Wer ist der Beste?",
        "answer_1": "Anouar",
        "answer_2": "Yasmine",
        "answer_3": "Avni",
        "answer_4": "Bilal",
        "right_answer": 1
    },
    {
        "question": "Wer ist der leidenschaftlicher Tänzer?",
        "answer_1": "Yasmine",
        "answer_2": "Avni",
        "answer_3": "Anouar",
        "answer_4": "Bilal",
        "right_answer": 2
    },
    {
        "question": "Wer Schwört auf seine?",
        "answer_1": "Avni",
        "answer_2": "Yasmine",
        "answer_3": "Anouar",
        "answer_4": "Lendita",
        "right_answer": 4
    },
    {
        "question": "Beende den Satz. Hey...",
        "answer_1": "Gangster",
        "answer_2": "Chicos",
        "answer_3": "Leute",
        "answer_4": "Du da",
        "right_answer": 3
    },
    {
        "question": "Wer ist der Esel?",
        "answer_1": "Avni",
        "answer_2": "Yasmine",
        "answer_3": "Anouar",
        "answer_4": "Lendita",
        "right_answer": 1
    },
    {
        "question": "Womit ersellst du einen Link?",
        "answer_1": "b.../b",
        "answer_2": "div.../div",
        "answer_3": "a.../a",
        "answer_4": "script.../script",
        "right_answer": 3
    },
    {
        "question": "Wer ist die Hexe?",
        "answer_1": "Sabrine",
        "answer_2": "Yasmine",
        "answer_3": "Widad",
        "answer_4": "Talia",
        "right_answer": 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        //TODO: Show End Screen
        document.getElementById('EndScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';

        document.getElementById('amounts-of-questions').innerHTML = questions.length;
        document.getElementById('amounts-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = 'img/Winner.png';
    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        console.log('Fortschritt:', percent);

        let question = questions[currentQuestion];

        document.getElementById('question-Number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer_1'];
        document.getElementById('answer-2').innerHTML = question['answer_2'];
        document.getElementById('answer-3').innerHTML = question['answer_3'];
        document.getElementById('answer-4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer-${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('Next-btn').disabled = false;
}

function NextQuestion() {
    currentQuestion++; //erhöht die zählung von 0 auf 1 dann 2...
    showQuestion();

    document.getElementById('Next-btn').disabled = true;

    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer-1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-1').parentNode.classList.remove('bg-success')
    document.getElementById('answer-2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-2').parentNode.classList.remove('bg-success')
    document.getElementById('answer-3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-3').parentNode.classList.remove('bg-success')
    document.getElementById('answer-4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-4').parentNode.classList.remove('bg-success')
};