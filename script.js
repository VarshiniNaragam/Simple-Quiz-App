const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');

// Define your questions here
const questions = [
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
    },
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct Answer!';
        feedbackElement.style.color = 'green';
        score++;
    } else {
        feedbackElement.textContent = `Wrong Answer! The correct answer is ${correctAnswer}`;
        feedbackElement.style.color = 'red';
    }
    submitButton.disabled = true;
    setTimeout(nextQuestion, 1000); // Move to the next question after 1 second
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
        feedbackElement.textContent = '';
        submitButton.disabled = false;
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    feedbackElement.textContent = `You scored ${score} out of ${totalQuestions}!`;
    submitButton.style.display = 'none';
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    feedbackElement.textContent = ''; // Clear previous feedback
});

// Load the first question when the page loads
loadQuestion();
