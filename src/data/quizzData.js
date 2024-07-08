const quizData = [
  {
    id: 1,
    question: "Wofür steht CSS?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colored Style Sheets",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Welche CSS Syntax ist korrekt?",
    options: [
      "{body: color=black;}",
      "{body; color: black;}",
      "body {color: black;}",
      "body: color=black",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Wie selektiert man ein Element mit id='demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Wie selektiert man alle p Elemente in einem div?",
    options: ["div + p", "div p", "div p.all", "div.p"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Was ist der Defaultwert für position?",
    options: ["relative", "fixed", "absolute", "static"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "Wie deklariert man eine Funktion in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function=myFunction()",
      "const myFunction()",
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Wie ruft man eine Funktion in JavaScript auf?",
    options: [
      "call myFunction()",
      "myFunction.call()",
      "myFunction()",
      "()=>{myFunction()}",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Who is the villain in the Powerpuff Girls episode #102?",
    options: ["Mojo Gojo", "Mojo Bojo", "Mojo Jojo", "Mojo Jaja"],
    correctAnswer: 2,
  },
];

export default quizData;
