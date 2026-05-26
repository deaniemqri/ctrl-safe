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
  },
  {
    question: "An online friend says they want to move the chat to a private messaging app because 'it is safer from adults'. What should you do?",
    options: [
      "Move to the private app immediately",
      "Be cautious because moving to private chat can be a grooming tactic",
      "Send them your other social media accounts"
    ],
    correct: 1,
    explanation: "Correct. Moving conversations to private spaces can make it harder for others to notice unsafe behaviour."
  },
  {
    question: "Someone threatens to expose your private messages unless you send more photos. What is the safest action?",
    options: [
      "Send more photos so they stop threatening you",
      "Delete everything and stay silent",
      "Save evidence, block/report the person, and tell a trusted adult immediately"
    ],
    correct: 2,
    explanation: "Correct. Threats and blackmail are serious warning signs. You should not handle it alone."
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("start-btn").style.display = "none";

  showQuestion();
}

function showQuestion() {
  const progressElement = document.getElementById("progress");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  progressElement.textContent = `Question ${currentQuestion + 1} of ${scenarios.length}`;
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
  const optionButtons = document.querySelectorAll(".option-btn");

  optionButtons.forEach(button => {
    button.disabled = true;
  });

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
  }, 2200);
}

function showResult() {
  const progressElement = document.getElementById("progress");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const startButton = document.getElementById("start-btn");

  progressElement.textContent = "Challenge Completed";
  questionElement.textContent = `Your score is ${score}/${scenarios.length}`;
  optionsElement.innerHTML = "";

  if (score === scenarios.length) {
    feedbackElement.textContent = "Excellent! You identified all red flags correctly.";
    feedbackElement.style.color = "green";
  } else if (score >= 3) {
    feedbackElement.textContent = "Good job! You understand many warning signs, but keep learning and stay alert.";
    feedbackElement.style.color = "#2563eb";
  } else {
    feedbackElement.textContent = "Keep learning. Online grooming can be difficult to spot, so remember: Stop, Screenshot, Block, Report, and Tell a trusted adult.";
    feedbackElement.style.color = "red";
  }

  startButton.textContent = "Restart Challenge";
  startButton.style.display = "inline-block";
}