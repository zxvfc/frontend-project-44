import generateRandom from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (progressionLegth) => {
  const initilaValue = generateRandom();
  const progressionStep = generateRandom(2, 5);
  const progression = [initilaValue];
  for (let i = 0; i < progressionLegth - 1; i += 1) {
    progression.push(progression.at(-1) + progressionStep);
  }
  return progression;
};

const buildQuestion = (progression, hidenElementIndex) => {
  let question = '';
  for (const i of Object.keys(progression)) {
    const element = i != hidenElementIndex ? progression[i] : '..';
    question += `${element} `;
  }
  return question;
};

const progressionGame = (userName) => {
  const questionsToAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgression(generateRandom(5, 10));
    const hidenElementIndex = generateRandom(0, progression.length);
    const question = buildQuestion(progression, hidenElementIndex);
    const correctAnswer = progression[hidenElementIndex];
    questionsToAnswers.push([question, correctAnswer]);
  }
  runGame(userName, description, questionsToAnswers);
};

export default progressionGame;
