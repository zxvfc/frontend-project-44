import readlineSync from 'readline-sync';

const runGame = (userName, description, questionsAndAnswers) => {
  console.log(description);
  for (let i = 0; i < questionsAndAnswers.length; i += 1) {
    const [question, correctAnswer] = questionsAndAnswers[i];
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== correctAnswer.toString()) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
