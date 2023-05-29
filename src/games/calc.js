import generateRandom from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const supportedOperations = ['+', '-', '*'];

const calculate = (n1, n2, operationIndex) => {
  const operationSymbol = supportedOperations[operationIndex];
  switch (operationSymbol) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    default: return null;
  }
};

const calcGame = (userName) => {
  const questionsToAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const n1 = generateRandom();
    const n2 = generateRandom();
    const operationIndex = generateRandom(0, 3);

    const question = `${n1} ${supportedOperations[operationIndex]} ${n2}`;
    const correctAnswer = calculate(n1, n2, operationIndex).toString();
    questionsToAnswers.push([question, correctAnswer]);
  }
  runGame(userName, description, questionsToAnswers);
};

export default calcGame;
