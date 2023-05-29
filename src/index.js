import readlineSync from 'readline-sync';

const runGame = (userName, description, questionsAndAnswers) => {
  console.log(description);
  for (const [question, correctAnswer] of questionsAndAnswers) {
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== correctAnswer.toString()) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
