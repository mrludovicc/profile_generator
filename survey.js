const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Thank you ${name}`);
  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`I like ${activity} as well!`);

    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`${music} are the best!!`);

      rl.question("Which meal is your favorite (eg: dinner, brunch, etc.) ", (meal) => {
        console.log(`${meal} is delicious`);

        rl.question("What's your favourite thing to eat for that meal? ", (tops) => {
          console.log(`${tops} is an excellent addition to ${meal}`);

          rl.question("Which sport is your absolute favorite? ", (sport) => {
            console.log(`I watch ${sport} all the time!`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`Wow!`);

              console.log(`As ${name} you like playing ${activity}, your favorite musicians are ${music}, you love ${meal} with some ${tops}, you like to watch ${sport}, and your superpower is ${superpower}!!`)

              rl.close()
            });
          });
        });
      });
    });
  });
});