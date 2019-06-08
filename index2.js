const brain = require("brain.js");
const data = require("./data.json");

// Long-Short Term Memory
const network = new brain.recurrent.LSTM();

// Setting training data
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

// Training the neural network agains training data
network.train(trainingData, {
  iterations: 2000
});

// Adding a new input text to analyze.
const output = network.run("i love bugs in my tests.");

console.log(`Category: ${output}`);
