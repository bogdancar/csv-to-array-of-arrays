#! /usr/bin/env node
'use strict'

var program = require('commander');
var fs = require('fs');
var encoding = "utf16le";

program
  .version('csv-to-array-of-arrays 1.0.0')
  .usage('-i input -o output')
  .option('-i, --input <file>', 'Input file')
  .option('-o, --output <file>', 'Output file')
  .option('-e, --encoding [string]', 'Encoding of csv file. Could be only utf8 or utf16le. Default utf16le')
  .parse(process.argv);

if (!program.input) {
  console.error("You have to specify an input file (-i [path to file])");
  process.exit(1);
}

if (!program.output) {
  console.error("You have to specify an output file (-o [path to file])");
  process.exit(1);
}

if (program.encoding) {
  if (program.encoding === 'utf8' || program.encoding === 'utf16le') {
    encoding = program.encoding;
    console.log('The encoding you specified, ' + program.encoding + ', will be used!');
  } else {
    console.log('The encoding you specified is not known. Program will use the default utf16le encoding.');
  }
} else {
  console.log('The default ' + encoding + ' encoding will be used to read the file.');
}

fs.readFile(program.input, encoding, (err, data) => {
  if (err) {
    return console.log(err);
  }
  let result = [];
  let lines = data.split('\n');
  if (lines[lines.length - 1] !== '') {
    lines.push('');
  }
  for (let i = 0; i < lines.length - 1; i++) {
    let lineSplit = lines[i].slice(0, -1).split(',');
    result.push(lineSplit);
  }
  fs.writeFile(program.output, JSON.stringify(result), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file ' + program.output + ' was saved!');
  });
});

