const data =  [

    {
        question: "Who is making the web standards?",
        a: "Google",
        b: "Microsoft",
        c: "Mozilla",
        d: "The world wide web Consortium",
        correct: "d",
    },
    {
        question: "Choose the Correct HTML element for the largest heading:",
        a: "<head>",
        b: "<heading>",
        c:  "<h1>",
        d:  "<h6>",
        correct: "c",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hypertext Machine Language",
        d: "Helicopters Terminals motorboats lamborginis",
        correct: "b",
    },
]
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionE1.innerText = currentQuizData.question
optionA.innerText = currentQuizData.a
optionB.innerText = currentQuizData.b
optionC.innerText = currentQuizData.c
optionD.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach((answerEls) =>(
        answerEls.checked = false
    ))
}

function getSelected(){
    let answer

    answerEls.forEach((answerEls) =>{
        if(answerEls.checked){
            answer = answerEls.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () =>{
const answer = getSelected()


if(answer){
    if(answer === data[currentQuiz].correct){
        score++
    }
    currentQuiz++

    if (currentQuiz < data.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML= `
        <h2>You Answerd ${score}/${data.length} Quetions Correctly</h2>

    <button onclick="location.reload()"> Do it Again</button>

    `
    }
}

})
