import express from 'express';
import helmet from 'helmet';
import fs from 'fs';
import render from 'preact-render-to-string';
import { h } from 'preact';
import App from '../app/components/app.js';
import { chemistBacktrack } from './utils.js';

const template = fs.readFileSync('./public/index.html', "utf8").split('<body>');
template[0] = `${template[0]}<body>`;

const app = express();

app.use(helmet());

app.get('/c/:word', (req, res) => {
  const solution = chemistBacktrack(req.params.word);

  return res.json(solution);
});

app.get('/', (req, res) => {
  const html = render(<App />);

  res.send(`${template[0]}${html}${template[1]}`)
});

app.get('/q/:phrase', (req, res) => {
  const html = render(<App url={`/q/${req.params.phrase}`} />);

  res.send(`${template[0]}${html}${template[1]}`)
});

app.use(express.static('./public'));

app.listen(3006, () => {
  console.log('Chemistli listening on port 3006!');
});
