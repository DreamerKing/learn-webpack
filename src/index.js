import { join } from 'lodash-es';
import './style.css';
import Imgicon from '../assets/movie.png';
import notes from './data/notes.csv';
import book from './data/book.xml';
import tdata from './data/data.toml';
import ydata from './data/data.yml';
import jdata from './data/data.json5'

console.log('notes:', notes);
console.log('book:', book);
console.log('tdata:', tdata);
console.log('ydata:', ydata);
console.log('jdata:', jdata);

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('con-play4');
  const img = new Image();
  img.src = Imgicon;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
