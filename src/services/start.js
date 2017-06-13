import * as fs from 'fs';
import { green, red } from 'chalk';

export default function write(text) {
  fs.writeFile('./tmp/Times.txt', text, function(err) {
    if(err) {
      return console.log(red(err));
    }
    console.log(green("File saved!"));
  })
}
