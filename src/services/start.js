import * as fs from 'fs';
import { green, red, blue } from 'chalk';

function writeProcess(text) {
  fs.readFile('./tmp/Times.txt', (err, file) => {
    let data = text;
    if(!err) {
      data = `${file}\n${text}`;
    }
    fs.writeFile('./tmp/Times.txt', data, { flag: 'w'}, function(err) {
      if(err) {
        return console.log(red(err));
      }
      console.log(green("File saved!"));
    });
  })
}

export default function write(text) {
  fs.exists('./tmp/', (exists) => {
    if (!exists) {
      return fs.mkdir('./tmp/', () => {
        console.log(blue('Temp dir Created!'));
        writeProcess(text);
      });
    }
    return writeProcess(text);
  });
}
