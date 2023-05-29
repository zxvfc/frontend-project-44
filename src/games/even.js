import generateRandom from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const evenGame = (userName) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsToAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = generateRandom();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    questionsToAnswers.push([number, correctAnswer]);
  }
  runGame(userName, description, questionsToAnswers);
};

export default evenGame;
