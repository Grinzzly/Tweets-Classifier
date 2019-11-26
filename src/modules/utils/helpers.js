import { NeuralNetwork } from 'brain.js';
import { trainingData } from './training-data';

let trainedNet;

const encoder = (arg) => (arg.split('').map((x) => (x.charCodeAt(0) / 256)));

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
  console.log(net);
  trainedNet = net.toFunction();
};

export const execute = (input) => {
  const results = trainedNet(encoder(input));
  let output;
  let certainty;

  if (results.trump > results.kardashian) {
    output = 'Donald Trump';
    certainty = Math.floor(results.trump * 100);
  } else {
    output = 'Kim Kardashian';
    certainty = Math.floor(results.kardashian * 100);
  }

  return `I'm ${certainty} % sure that tweet was written by ${output}`;
};

train(trainingData);
