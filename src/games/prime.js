import generateRandom from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2 || number === 3) {
    return true;
  }
  if (number <= 1 || number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(number); i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = (userName) => {
  const questionsToAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const number = generateRandom();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    questionsToAnswers.push([number, correctAnswer]);
  }
  runGame(userName, description, questionsToAnswers);
};

export default primeGame;
