// src/assessments/frontend.js

export default {
  domain: "Frontend Development",
  durationMinutes: 20,
  passingScore: 6,
  questions: [
    {
      q: "What does HTML mainly define?",
      options: [
        "Website structure",
        "Website styling",
        "Server logic",
        "Database schema"
      ],
      correct: 0,
    },
    {
      q: "Which CSS property is used for layout alignment?",
      options: ["color", "flex", "margin", "font-size"],
      correct: 1,
    },
    {
      q: "What does JavaScript mainly handle in frontend?",
      options: [
        "Page structure",
        "Styling",
        "Interactivity & logic",
        "SEO ranking"
      ],
      correct: 2,
    },
    {
      q: "Which keyword declares a block-scoped variable?",
      options: ["var", "const", "static", "define"],
      correct: 1,
    },
    {
      q: "What is the DOM?",
      options: [
        "Database Object Model",
        "Document Object Model",
        "Design Oriented Model",
        "Data Output Module"
      ],
      correct: 1,
    },
    {
      q: "React is mainly based on which concept?",
      options: [
        "Templates",
        "Components",
        "Pages",
        "Classes only"
      ],
      correct: 1,
    },
    {
      q: "Which hook manages state in React?",
      options: ["useFetch", "useEffect", "useState", "useClass"],
      correct: 2,
    },
    {
      q: "Why is key prop used in React lists?",
      options: [
        "For styling",
        "For faster rendering & diffing",
        "For routing",
        "For security"
      ],
      correct: 1,
    },
    {
      q: "What does responsive design mean?",
      options: [
        "Fast loading website",
        "Mobile-only design",
        "Layout adapts to screen size",
        "More animations"
      ],
      correct: 2,
    },
    {
      q: "Which tool helps bundle frontend code?",
      options: ["Webpack", "MongoDB", "Postman", "Firebase"],
      correct: 0,
    },
  ],
};