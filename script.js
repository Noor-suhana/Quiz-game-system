// =====================================================
// QUIZ QUESTIONS
// =====================================================

const questions = [

    {
        question: "Which language is mainly used for this project?",
        options: [
            "Python",
            "C++",
            "HTML",
            "SQL"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used to end a statement in C++?",
        options: [
            ".",
            ":",
            ";",
            ","
        ],
        answer: 2
    },

    {
        question: "Which concept combines data and functions into a single unit?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Polymorphism",
            "Abstraction"
        ],
        answer: 1
    },

    {
        question: "Which keyword is used to create a class in C++?",
        options: [
            "object",
            "class",
            "structs",
            "define"
        ],
        answer: 1
    },

    {
        question: "Which of the following is used to display output in C++?",
        options: [
            "cin",
            "scanf",
            "cout",
            "print"
        ],
        answer: 2
    },

    {
        question: "Which operator is used with cout?",
        options: [
            ">>",
            "<<",
            "==",
            "++"
        ],
        answer: 1
    },

    {
        question: "Which OOP concept allows a class to acquire properties of another class?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Abstraction",
            "Compilation"
        ],
        answer: 1
    },

    {
        question: "Which function is automatically called when an object is created?",
        options: [
            "Destructor",
            "Main function",
            "Constructor",
            "Display function"
        ],
        answer: 2
    },

    {
        question: "Which header file is commonly used for input and output in C++?",
        options: [
            "iostream",
            "fstream",
            "string",
            "vector"
        ],
        answer: 0
    },

    {
        question: "Which stream is used to write data into a file?",
        options: [
            "ifstream",
            "ofstream",
            "cin",
            "cout"
        ],
        answer: 1
    }

];


// =====================================================
// VARIABLES
// =====================================================

let currentQuestionIndex = 0;

let score = 0;

let selectedAnswer = null;

let playerName = "";


// =====================================================
// HTML ELEMENTS
// =====================================================

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const historyScreen =
    document.getElementById("historyScreen");

const playerNameInput =
    document.getElementById("playerName");

const startBtn =
    document.getElementById("startBtn");

const displayPlayerName =
    document.getElementById("displayPlayerName");

const currentQuestion =
    document.getElementById("currentQuestion");

const totalQuestions =
    document.getElementById("totalQuestions");

const progressBar =
    document.getElementById("progressBar");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const feedback =
    document.getElementById("feedback");

const nextBtn =
    document.getElementById("nextBtn");


// =====================================================
// START QUIZ
// =====================================================

startBtn.addEventListener("click", function () {

    const name =
        playerNameInput.value.trim();

    if (name === "") {

        alert("Please enter your name.");

        playerNameInput.focus();

        return;
    }

    playerName = name;

    displayPlayerName.textContent =
        playerName;

    currentQuestionIndex = 0;

    score = 0;

    showScreen(quizScreen);

    loadQuestion();

});


// =====================================================
// SHOW SCREEN
// =====================================================

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(function (item) {

            item.classList.remove("active");

        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================================
// LOAD QUESTION
// =====================================================

function loadQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    feedback.textContent = "";

    feedback.className = "feedback";

    const current =
        questions[currentQuestionIndex];

    currentQuestion.textContent =
        currentQuestionIndex + 1;

    totalQuestions.textContent =
        questions.length;

    questionNumber.textContent =
        "QUESTION " +
        (currentQuestionIndex + 1);

    questionText.textContent =
        current.question;

    progressBar.style.width =
        ((currentQuestionIndex + 1)
        / questions.length * 100) + "%";


    optionsContainer.innerHTML = "";


    current.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.className = "option";

            button.textContent =
                String.fromCharCode(65 + index)
                + ". "
                + option;

            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );

            optionsContainer.appendChild(button);

        }
    );
}


// =====================================================
// SELECT ANSWER
// =====================================================

function selectAnswer(index, selectedButton) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const current =
        questions[currentQuestionIndex];

    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    if (index === current.answer) {

        score++;

        selectedButton.classList.add("correct");

        feedback.textContent =
            "✓ Correct Answer!";

        feedback.classList.add(
            "correct-text"
        );

    }
    else {

        selectedButton.classList.add("wrong");

        allOptions[
            current.answer
        ].classList.add("correct");

        feedback.textContent =
            "✗ Wrong Answer!";

        feedback.classList.add(
            "wrong-text"
        );

    }


    nextBtn.disabled = false;

    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {

        nextBtn.textContent =
            "View Result →";

    }
    else {

        nextBtn.textContent =
            "Next Question →";

    }
}


// =====================================================
// NEXT QUESTION
// =====================================================

nextBtn.addEventListener(
    "click",
    function () {

        if (selectedAnswer === null) {
            return;
        }

        if (
            currentQuestionIndex <
            questions.length - 1
        ) {

            currentQuestionIndex++;

            loadQuestion();

        }
        else {

            showResult();

        }

    }
);


// =====================================================
// SHOW RESULT
// =====================================================

function showResult() {

    showScreen(resultScreen);

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    const wrong =
        questions.length - score;


    document.getElementById(
        "resultPlayerName"
    ).textContent = playerName;


    document.getElementById(
        "percentage"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "correctAnswers"
    ).textContent =
        score;


    document.getElementById(
        "wrongAnswers"
    ).textContent =
        wrong;


    let performance;


    if (percentage >= 90) {

        performance = "Excellent";

    }
    else if (percentage >= 70) {

        performance = "Very Good";

    }
    else if (percentage >= 50) {

        performance = "Good";

    }
    else {

        performance = "Needs Improvement";

    }


    document.getElementById(
        "performance"
    ).textContent =
        performance;


    saveResult(
        playerName,
        score,
        percentage,
        performance
    );
}


// =====================================================
// SAVE RESULT
// =====================================================

function saveResult(
    name,
    score,
    percentage,
    performance
) {

    let results =
        JSON.parse(
            localStorage.getItem(
                "quizResults"
            )
        ) || [];


    results.push({

        name: name,

        score: score,

        total: questions.length,

        percentage: percentage,

        performance: performance,

        date: new Date().toLocaleString()

    });


    localStorage.setItem(
        "quizResults",
        JSON.stringify(results)
    );
}


// =====================================================
// PLAY AGAIN
// =====================================================

document.getElementById(
    "playAgainBtn"
).addEventListener(
    "click",
    function () {

        currentQuestionIndex = 0;

        score = 0;

        showScreen(quizScreen);

        loadQuestion();

    }
);


// =====================================================
// HOME BUTTON
// =====================================================

document.getElementById(
    "homeBtn"
).addEventListener(
    "click",
    function () {

        playerNameInput.value = "";

        showScreen(homeScreen);

    }
);


// =====================================================
// HISTORY BUTTON
// =====================================================

document.getElementById(
    "historyHomeBtn"
).addEventListener(
    "click",
    function () {

        showScreen(homeScreen);

    }
);


// =====================================================
// VIEW HISTORY
// =====================================================

document.getElementById(
    "historyBtn"
).addEventListener(
    "click",
    function () {

        loadHistory();

        showScreen(historyScreen);

    }
);


// =====================================================
// LOAD HISTORY
// =====================================================

function loadHistory() {

    const historyList =
        document.getElementById(
            "historyList"
        );


    let results =
        JSON.parse(
            localStorage.getItem(
                "quizResults"
            )
        ) || [];


    historyList.innerHTML = "";


    if (results.length === 0) {

        historyList.innerHTML =
            '<div class="history-empty">' +
            'No previous quiz results yet.' +
            '</div>';

        return;
    }


    results
        .slice()
        .reverse()
        .forEach(
            function (result) {

                const item =
                    document.createElement("div");

                item.className =
                    "history-item";


                item.innerHTML = `

                    <div>
                        <strong>
                            ${result.name}
                        </strong>

                        <br>

                        <small>
                            ${result.date}
                        </small>
                    </div>

                    <div>
                        <strong>
                            ${result.score}/${result.total}
                        </strong>

                        <br>

                        <small>
                            ${result.percentage}%
                            - ${result.performance}
                        </small>
                    </div>

                `;


                historyList.appendChild(item);

            }
        );
}