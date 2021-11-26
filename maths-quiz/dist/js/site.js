
let questions = [
  {
    id: 1,
    question: "Of the following options, which one is NOT an axiom of a vector space?",
    answer: "Commutativity of addition",
    options: [
      "Associativity of multiplication",
      "Commutativity of addition",
      "Associativity of addition",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "How to obtain displacement from velocity equation?",
    answer: "Integration",
    options: [
      "Integration",
      "Diffrentiation",
      "Diagonalization",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "The concept of an infinitesimal was replaced by the concept of a limit during the______",
    answer: "Rigorization stage",
    options: [
      "Optimization stage",
      "Rigorization stage",
      "Anticipation stage",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Who designed the Vietnam Veterans Memorial?",
    answer: "Maya Lin",
    options: [
      "Maya Lin",
      "Shuan Zhing",
      "Adam Kaveski",
      "None of these"
    ]
  },
  {
    id: 5,
    question: " What did I.M. Pei design outside the Louvre, in Paris?",
    answer: "Pyramid",
    options: [
      "Building",
      "Pyramid",
      "Squarical",
      "None of these"
    ]
  },
  {
    id: 6,
    question: "Which one of these is not a well-known Indian sculptor?",
    answer: "Henry Moore",
    options: [
      "Ram Singh",
      "Amit Singh",
      "Henry Moore",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "What animal often symbolizes peace in art?",
    answer: "Dove",
    options: [
      "Dove",
      "Lion",
      "Kiwi",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "What Dutch artist is famous for his strange geometrical puzzles?",
    answer: "MC Escher",
    options: [
      "MC Escher",
      "Elevento Schkodran",
      "Robert Szynskwi",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "Which of these artists is famous for using human paintbrushes?",
    answer: "Dominic Klein",
    options: [
      "Dominic Klein",
      "Jurgeon Klopp",
      "Pep Guardiola",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "Who was the first famous artist of the Italian Renaissance?",
    answer: "Massacio",
    options: [
      "Massacio",
      "Leonardo",
      "Valentina",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1000;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h5>Q${count + 1}. ${questions[count].question}</h5>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
