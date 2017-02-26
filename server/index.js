const express = require('express');
const path = require('path');
const helmet = require('helmet');
const elements = require('./elements.json');

const app = express();

app.use(helmet());

const find = (word) => {
  let current = { element: null, letters: 0, prev: null, next: [] };

  while (true) {
    current.visited = true;

    // found a solution
    if(current.letters === word.length) {
      const solution = [];

      while (current.element) {
        solution.unshift(current.element);
        current = current.prev;
      }

      return solution;
    }

    // calculate possible next steps
    if (current.next.length === 0) {
      if (current.letters < word.length - 1) {
        const element = elements.find(e => e.symbol.toLowerCase() === `${word[current.letters]}${word[current.letters + 1]}`.toLowerCase());
        if (element) current.next.push({ element, visited: false, prev: current, letters: current.letters + 2, next: [] });
      }

      if (current.letters < word.length) {
        const element = elements.find(e => e.symbol.toLowerCase() === word[current.letters].toLowerCase());
        if (element) current.next.push({ element, visited: false, prev: current, letters: current.letters + 1, next: [] });
      }
    }

    // select next possible step
    const next = current.next.find(n => !n.visited);

    // go to next step
    if (next) {
      current = next;
    // backtrace
    } else if (current.prev) {
      current = current.prev;
    // no next step possible
    } else {
      return false;
    }
  }
}

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/c/:word', (req, res) => {
  const elements = find(req.params.word);

  if (elements) return res.json({ success: true, elements });

  return res.json({ success: false, elements: [] });
});

app.get('/q/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
