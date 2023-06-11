// Array of math questions and answers
var mathQuestions = [
    { question: "2 + 3 =", answer: 5 },
    { question: "4 - 2 =", answer: 2 },
    { question: "3 x 4 =", answer: 12 },
    { question: "10 ÷ 2 =", answer: 5 },
];

var currentQuestion = 0;
var resultElement = document.getElementById("result");

// Function to display a new question
function displayQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.textContent = mathQuestions[currentQuestion].question;
    document.getElementById("answer").value = "";
    resultElement.textContent = "";
}

// Function to check the answer
function checkAnswer() {
    var userAnswer = parseInt(document.getElementById("answer").value);
    var correctAnswer = mathQuestions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Jawaban kamu benar!";
    } else {
        resultElement.textContent = "Jawaban kamu salah. Coba lagi!";
    }

    currentQuestion++;
    if (currentQuestion < mathQuestions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = "Selesai! Terima kasih.";
    }
}

// Initial question display
displayQuestion();
