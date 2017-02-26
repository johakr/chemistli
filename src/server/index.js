const express = require('express');
const helmet = require('helmet');
const fs = require('fs');
import render from 'preact-render-to-string';
import { h } from 'preact';
import App from '../app/components/app.js';
import elements from './elements';

const template = fs.readFileSync('./public/index.html', "utf8").split('<body>');
template[0] = `${template[0]}<body>`;

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

app.get('/c/:word', (req, res) => {
  const elements = find(req.params.word);

  if (elements) return res.json({ success: true, elements });

  return res.json({ success: false, elements: [] });
});

app.get('/', (req, res) => {
  let html = render(<App />);

  res.send(`${template[0]}${html}${template[1]}`)
});

app.get('/q/*', (req, res) => {
  let html = ''; // TODO
  res.send(`${template[0]}${html}${template[1]}`)
});

app.use(express.static('./public'));

app.listen(3006, () => {
  console.log('Example app listening on port 3006!');
});
