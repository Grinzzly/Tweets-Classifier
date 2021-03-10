import { NeuralNetwork } from 'brain.js/src';

import { trainingData } from './training-data';

let trainedNet;

const encoder = (arg) => ({ ...arg.split('').map((x) => (x.charCodeAt(0) / 256)) });

const processTrainingData = (data) => (data.map((d) => ({
  input: encoder(d.input),
  output: d.output,
})));

const train = (data) => {
  const net = new NeuralNetwork();

  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
};

export const execute = (input) => {
  const results = trainedNet(encoder(input));
  const possibleAuthor = Object.keys(results).reduce((a, b) => (results[a] > results[b] ? a : b));
  let output;
  let certainty;

  switch (possibleAuthor) {
    case 'trump':
      certainty = Math.floor(results.trump * 100);
      output = {
        name: 'Donald J. Trump',
        nick: '@realDonaldTrump',
        imageSrc: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
        catchPhrase: `I'm ${certainty} % sure that such tweet may be written by Donald J. Trump`,
      };
      break;
    case 'kardashian':
      certainty = Math.floor(results.kardashian * 100);
      output = {
        name: 'Kim Kardashian',
        nick: '@KimKardashian',
        imageSrc: 'https://pbs.twimg.com/profile_images/1145812709960667136/YF4VoP3e_400x400.jpg',
        catchPhrase: `I'm ${certainty} % sure that such tweet may be written by Kim Kardashian`,
      };
      break;
    default:
      certainty = Math.floor(results.kardashian * 100);
      output = {
        name: 'Sergey',
        nick: '@grinnzly',
        imageSrc: 'https://pbs.twimg.com/profile_images/1137802446628184064/L7ExDNvm_400x400.jpg',
        catchPhrase: `I'm ${certainty} % sure that such tweet may be written by Grinzzly`,
      };
  }

  return output;
};

train(trainingData);
