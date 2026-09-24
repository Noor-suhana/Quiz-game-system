// =====================================================
// QUIZ QUESTIONS
// =====================================================

// EASY QUESTIONS
const easyQuestions = [

    {
        question: "Which symbol is used to end a statement in C++?",
        options: [".", ":", ";", ","],
        answer: 2
    },

    {
        question: "Which of the following is used to display output in C++?",
        options: ["cin", "scanf", "cout", "print"],
        answer: 2
    },

    {
        question: "Which header file is commonly used for input and output in C++?",
        options: ["iostream", "fstream", "string", "vector"],
        answer: 0
    },

    {
        question: "Which keyword is used to create a class in C++?",
        options: ["object", "class", "structs", "define"],
        answer: 1
    },

    {
        question: "Which operator is used with cout?",
        options: [">>", "<<", "==", "++"],
        answer: 1
    },

    {
        question: "Which keyword is used to declare a constant variable?",
        options: ["constant", "const", "static", "fixed"],
        answer: 1
    },

    {
        question: "Which data type is used to store whole numbers?",
        options: ["float", "char", "int", "double"],
        answer: 2
    },

    {
        question: "Which function is the starting point of a C++ program?",
        options: ["start()", "main()", "begin()", "run()"],
        answer: 1
    },

    {
        question: "Which symbol is used for a single-line comment in C++?",
        options: ["//", "/*", "#", "--"],
        answer: 0
    },

    {
        question: "Which operator is used for addition?",
        options: ["-", "*", "+", "/"],
        answer: 2
    }

];


// MEDIUM QUESTIONS
const mediumQuestions = [

    {
        question: "Which OOP concept combines data and functions into a single unit?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Polymorphism",
            "Compilation"
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
        question: "Which stream is used to write data into a file?",
        options: [
            "ifstream",
            "ofstream",
            "cin",
            "cout"
        ],
        answer: 1
    },

    {
        question: "Which OOP concept allows one interface to have different implementations?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction"
        ],
        answer: 2
    },

    {
        question: "Which access specifier makes class members accessible from outside the class?",
        options: [
            "private",
            "protected",
            "public",
            "internal"
        ],
        answer: 2
    },

    {
        question: "Which STL container stores elements in a dynamic array?",
        options: [
            "stack",
            "queue",
            "vector",
            "map"
        ],
        answer: 2
    },

    {
        question: "Which operator is used to access members of an object?",
        options: [
            ".",
            "::",
            "->",
            "#"
        ],
        answer: 0
    },

    {
        question: "Which keyword is used for dynamic memory allocation?",
        options: [
            "malloc",
            "create",
            "new",
            "alloc"
        ],
        answer: 2
    },

    {
        question: "Which OOP concept helps protect data from direct access?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Compilation"
        ],
        answer: 0
    }

];


// HARD QUESTIONS
const hardQuestions = [

    {
        question: "What is function overloading?",
        options: [
            "Using the same function name with different parameters",
            "Using different names for the same function",
            "Calling a function repeatedly",
            "Deleting a function"
        ],
        answer: 0
    },

    {
        question: "Which access specifier provides the highest level of data hiding?",
        options: [
            "public",
            "protected",
            "private",
            "global"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to achieve runtime polymorphism?",
        options: [
            "static",
            "virtual",
            "friend",
            "inline"
        ],
        answer: 1
    },

    {
        question: "Which OOP concept shows only essential features and hides implementation details?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Abstraction",
            "Polymorphism"
        ],
        answer: 2
    },

    {
        question: "Which special member function is automatically called when an object is destroyed?",
        options: [
            "Constructor",
            "Destructor",
            "Main",
            "Operator"
        ],
        answer: 1
    },

    {
        question: "Which keyword prevents a class from being inherited?",
        options: [
            "stop",
            "final",
            "sealed",
            "private"
        ],
        answer: 1
    },

    {
        question: "What is function overriding?",
        options: [
            "Defining a derived class function with the same signature as a base class function",
            "Creating two functions with different parameters",
            "Calling a function twice",
            "Deleting the base function"
        ],
        answer: 0
    },

    {
        question: "Which mechanism is commonly used for runtime polymorphism?",
        options: [
            "Function overloading",
            "Virtual functions",
            "Templates",
            "Macros"
        ],
        answer: 1
    },

    {
        question: "Which operator cannot be overloaded in C++?",
        options: [
            "+",
            "-",
            "::",
            "*"
        ],
        answer: 2
    },

    {
        question: "Polymorphism mainly means:",
        options: [
            "One class only",
            "One interface with different implementations",
            "Hiding all data",
            "Creating objects"
        ],
        answer: 1
    }

];


// =====================================================
// VARIABLES
// =====================================================

let questions = [];

let currentQuestionIndex = 0;

let score = 0;

let selectedAnswer = null;

let playerName = "";

let selectedDifficulty = "Easy";

let timeLimit = 20;

let timeRemaining = 20;

let timerInterval = null;

let correctAnswers = 0;

let wrongAnswers = 0;

let timedOutQuestions = 0;

let marksPerQuestion = 1;


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

const displayDifficulty =
    document.getElementById("displayDifficulty");

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

const timer =
    document.getElementById("timer");

const timerContainer =
    document.querySelector(".timer-container");


// =====================================================
// GET DIFFICULTY SETTINGS
// =====================================================

function setDifficulty(difficulty) {

    selectedDifficulty = difficulty;

    if (difficulty === "Easy") {

        questions = [...easyQuestions];

        timeLimit = 20;

        marksPerQuestion = 1;

    }

    else if (difficulty === "Medium") {

        questions = [...mediumQuestions];

        timeLimit = 15;

        marksPerQuestion = 2;

    }

    else {

        questions = [...hardQuestions];

        timeLimit = 10;

        marksPerQuestion = 3;

    }

}


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


    const selected =
        document.querySelector(
            'input[name="difficulty"]:checked'
        );


    if (selected) {

        setDifficulty(selected.value);

    }


    playerName = name;

    displayPlayerName.textContent =
        playerName;

    displayDifficulty.textContent =
        selectedDifficulty;


    currentQuestionIndex = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    timedOutQuestions = 0;


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

    clearInterval(timerInterval);

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


    startTimer();

}


// =====================================================
// START TIMER
// =====================================================

function startTimer() {

    clearInterval(timerInterval);

    timeRemaining = timeLimit;

    timer.textContent = timeRemaining;

    timerContainer.classList.remove(
        "warning",
        "danger"
    );


    timerInterval =
        setInterval(function () {

            timeRemaining--;

            timer.textContent =
                timeRemaining;


            if (timeRemaining <= 5) {

                timerContainer.classList.remove(
                    "warning"
                );

                timerContainer.classList.add(
                    "danger"
                );

            }

            else if (timeRemaining <= 10) {

                timerContainer.classList.add(
                    "warning"
                );

            }


            if (timeRemaining <= 0) {

                clearInterval(timerInterval);

                handleTimeOut();

            }

        }, 1000);

}


// =====================================================
// TIME OUT
// =====================================================

function handleTimeOut() {

    if (selectedAnswer !== null) {
        return;
    }


    timedOutQuestions++;

    selectedAnswer = -1;


    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    feedback.textContent =
        "⏰ Time Expired!";

    feedback.className =
        "feedback wrong-text";


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
// SELECT ANSWER
// =====================================================

function selectAnswer(index, selectedButton) {

    if (selectedAnswer !== null) {
        return;
    }


    clearInterval(timerInterval);

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

        correctAnswers++;

        score += marksPerQuestion;

        selectedButton.classList.add(
            "correct"
        );


        feedback.textContent =
            "✓ Correct Answer! +" +
            marksPerQuestion +
            " mark";


        feedback.classList.add(
            "correct-text"
        );

    }

    else {

        wrongAnswers++;


        selectedButton.classList.add(
            "wrong"
        );


        allOptions[
            current.answer
        ].classList.add(
            "correct"
        );


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


        clearInterval(timerInterval);


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

    clearInterval(timerInterval);

    showScreen(resultScreen);


    const totalMarks =
        questions.length *
        marksPerQuestion;


    const percentage =
        Math.round(
            (score / totalMarks) * 100
        );


    document.getElementById(
        "resultPlayerName"
    ).textContent =
        playerName;


    document.getElementById(
        "resultDifficulty"
    ).textContent =
        selectedDifficulty;


    document.getElementById(
        "percentage"
    ).textContent =
        percentage + "%";


    document.getElementById(
        "correctAnswers"
    ).textContent =
        correctAnswers;


    document.getElementById(
        "wrongAnswers"
    ).textContent =
        wrongAnswers;


    document.getElementById(
        "timedOutQuestions"
    ).textContent =
        timedOutQuestions;


    document.getElementById(
        "finalScore"
    ).textContent =
        score + "/" + totalMarks;


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
        selectedDifficulty,
        correctAnswers,
        wrongAnswers,
        timedOutQuestions,
        score,
        totalMarks,
        percentage,
        performance
    );

}


// =====================================================
// SAVE RESULT
// =====================================================

function saveResult(
    name,
    difficulty,
    correct,
    wrong,
    timedOut,
    score,
    totalMarks,
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

        difficulty: difficulty,

        correct: correct,

        wrong: wrong,

        timedOut: timedOut,

        score: score,

        total: totalMarks,

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

        correctAnswers = 0;

        wrongAnswers = 0;

        timedOutQuestions = 0;


        setDifficulty(
            selectedDifficulty
        );


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

        clearInterval(timerInterval);

        playerNameInput.value = "";

        showScreen(homeScreen);

    }
);


// =====================================================
// HISTORY HOME BUTTON
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
// HISTORY BUTTON
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
// LEADERBOARD BUTTON
// =====================================================

document.getElementById(
    "leaderboardBtn"
).addEventListener(
    "click",
    function () {

        showLeaderboard();

        showScreen(leaderboardScreen);

    }
);

// Leaderboard Home Button
document.getElementById(
    "leaderboardHomeBtn"
).addEventListener(
    "click",
    function () {

        showScreen(homeScreen);

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

                        <br>

                        <small>
                            Difficulty:
                            ${result.difficulty || "Easy"}
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

                        <br>

                        <small>
                            Correct:
                            ${result.correct || 0}
                            |
                            Wrong:
                            ${result.wrong || 0}
                            |
                            Time:
                            ${result.timedOut || 0}
                        </small>

                    </div>

                `;


                historyList.appendChild(item);

            }
        );

}
// =====================================================
// LEADERBOARD
// =====================================================

function showLeaderboard() {

    const leaderboardList =
        document.getElementById(
            "leaderboardList"
        );


    let results =
        JSON.parse(
            localStorage.getItem(
                "quizResults"
            )
        ) || [];


    leaderboardList.innerHTML = "";


    if (results.length === 0) {

        leaderboardList.innerHTML =
            '<div class="history-empty">' +
            'No quiz results available yet.' +
            '</div>';

        return;
    }


    // Sort highest percentage first
    results.sort(
        function (a, b) {

            return (
                Number(b.percentage) -
                Number(a.percentage)
            );

        }
    );


    results.forEach(
        function (result, index) {

            const item =
                document.createElement("div");


            item.className =
                "history-item";


            let rank = index + 1;

            let medal = "";

            if (rank === 1)
                medal = "🥇";

            else if (rank === 2)
                medal = "🥈";

            else if (rank === 3)
                medal = "🥉";

            else
                medal = rank;


            item.innerHTML = `

                <div>

                    <strong>
                        ${medal} ${result.name}
                    </strong>

                    <br>

                    <small>
                        Difficulty:
                        ${result.difficulty || "Easy"}
                    </small>

                </div>


                <div>

                    <strong>
                        ${result.score}/${result.total}
                    </strong>

                    <br>

                    <small>
                        ${result.percentage}%
                        -
                        ${result.performance}
                    </small>

                </div>

            `;


            leaderboardList.appendChild(item);

        }
    );

}