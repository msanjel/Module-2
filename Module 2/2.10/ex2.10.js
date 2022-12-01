'use strict';
const nrOfCandidadtes = prompt('How many candidates?');
// Here I create the array for the total candidates
const totalCandidates = [];

// all candidates are named below
for (let i = 0; i < nrOfCandidadtes; i++) {
  const name = prompt('Name for candidate ' + (i + 1));
  const candidate = {
    name: name,
    votes: 0,
  };
  totalCandidates.push(candidate);
}

const voters = prompt('How many voters in total?');

for (let i = 0; i < voters; i++) {
  const vote = prompt('Who do you vote for?');
  for (let candidate of totalCandidates) {
    if (candidate.name == vote) {
      candidate.votes++;
    }
  }
}

totalCandidates.sort((a, b) => b.votes - a.votes);

console.log('after sorting', totalCandidates);

console.log(`Winner is ${totalCandidates[0].name} with ${totalCandidates[0].votes} votes`);
console.log('results:');
for (const candidate of totalCandidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}