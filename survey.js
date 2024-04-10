const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    profile[questions[index]] = answer;
    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      generateProfile();
      rl.close();
    }
  });
};

const generateProfile = () => {
  console.log("\nHere's your profile:\n");
  console.log(`Name: ${profile[questions[0]]}`);
  console.log(`Activity: ${profile[questions[1]]}`);
  console.log(`Music: ${profile[questions[2]]}`);
  console.log(`Favorite Meal Time: ${profile[questions[3]]}`);
  console.log(`Favorite Meal: ${profile[questions[4]]}`);
  console.log(`Favorite Sport: ${profile[questions[5]]}`);
  console.log(`Superpower: ${profile[questions[6]]}\n`);
};

askQuestion(0);
