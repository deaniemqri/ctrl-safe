const scenarios = [
  {
    question: "Someone you just met online says: 'You are so mature for your age. Don't tell anyone we talk, they won't understand.' What is the red flag?",
    options: [
      "They are just being friendly",
      "They are asking for secrecy and using flattery",
      "They want to help with homework"
    ],
    correct: 1,
    explanation: "Correct. Asking for secrecy and giving excessive compliments can be grooming warning signs."
  },
  {
    question: "A person online offers you free game credits if you send them your phone number. What should you do?",
    options: [
      "Send the number because it is only for game credits",
      "Ask for more rewards first",
      "Do not share personal information and block/report the person"
    ],
    correct: 2,
    explanation: "Correct. Gifts or rewards can be used to gain trust or pressure someone."
  },
  {
    question: "Someone keeps asking which school you go to and what time you usually go home. What is the safest response?",
    options: [
      "Do not share routine or location details",
      "Tell them because they seem nice",
      "Send your live location"
    ],
    correct: 0,
    explanation: "Correct. School, address, and daily routine are private information."
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  questionElement.textContent = scenarios[currentQuestion].question;
  optionsElement.innerHTML = "";
  feedbackElement.textContent = "";

  scenarios[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-btn";
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const feedbackElement = document.getElementById("feedback");

  if (selectedIndex === scenarios[currentQuestion].correct) {
    score++;
    feedbackElement.textContent = scenarios[currentQuestion].explanation;
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = "Not quite. This situation may be risky. The safest action is to protect your information, block/report, and tell a trusted adult.";
    feedbackElement.style.color = "red";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < scenarios.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1800);
}

function showResult() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  questionElement.textContent = `Challenge completed! Your score is ${score}/${scenarios.length}.`;
  optionsElement.innerHTML = "";
  feedbackElement.textContent = "Remember the CTRL+SAFE rule: Stop, Screenshot, Block, Report, and Tell a trusted adult.";
  feedbackElement.style.color = "#2563eb";
}