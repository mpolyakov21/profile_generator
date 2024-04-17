const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("What's your name? Nicknames are also acceptable :)\n", (answer1) => {
  profile.name = answer1;
  rl.question("What's an activity you like doing?\n", (answer2) => {
    profile.activity = answer2;
    rl.question("What do you listen to while doing that?\n", (answer3) => {
      profile.music = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?\n", (answer4) => {
        profile.meal = answer4;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer5) => {
          profile.favoriteFood = answer5;
          rl.question("Which sport is your absolute favourite?\n", (answer6) => {
            profile.sport = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              profile.superpower = answer7;
              console.log("\n--- Your Profile ---");
              Object.entries(profile).forEach(([question, answer]) => {
                console.log(`${question}: ${answer}`);
              });
              rl.close();
            });
          });
        });
      });
    });
  });
});