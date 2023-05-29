import generateRandom from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  if (n2 === 0) {
    return Math.max(n1, -n1);
  }
  return findGcd(n2, n1 % n2);
};

const gdcGame = (userName) => {
  const questionsToAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const n1 = generateRandom();
    const n2 = generateRandom();

    const question = `${n1} ${n2}`;
    const correctAnswer = findGcd(n1, n2);
    questionsToAnswers.push([question, correctAnswer]);
  }
  runGame(userName, description, questionsToAnswers);
};

export default gdcGame;
