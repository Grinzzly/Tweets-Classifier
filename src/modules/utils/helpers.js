import { NeuralNetwork } from 'brain.js';
import { trainingData } from './training-data';

let trainedNet;

const encoder = (arg) => ({...arg.split('').map((x) => (x.charCodeAt(0) / 256))});

const processTrainingData = (data) => {
  return data.map((d) => {
    return {
      input: encoder(d.input),
      output: d.output,
    };
  });
};

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
      output = 'Donald Trump';
      certainty = Math.floor(results.trump * 100);
      break;
    case 'kardashian':
      output = 'Kim Kardashian';
      certainty = Math.floor(results.kardashian * 100);
      break;
    default:
      output = 'Grinzzly';
      certainty = Math.floor(results.grinzzly * 100);
  }

  return `I'm ${certainty} % sure that such tweet may be written by ${output}`;
};

train(trainingData);
