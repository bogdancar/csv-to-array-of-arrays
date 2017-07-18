csv-to-array-of-arrays
----------------------

This is a command line app that runs on node used to transform a csv file to an array of string arrays. I needed this for my [find-phone-model](https://github.com/bogdancar/find-phone-model) app to transform the list of phone models from [models accepted on Play Store](https://support.google.com/googleplay/answer/1727131?hl=en-GB) into an array of string arrays to reduce the space taken by datasource.
The app will take any csv file and return a new file containing an array with string arrays inside for each line of the csv.

Usage
=====

First we have to install the app with `yarn global add csv-to-array-of-arrays` or `npm i -g csv-to-array-of-arrays`

To use the app, you need to supply an input file and an output file:

 ```
 csvtoaoa -i <input file> -o <output file>
 ```

 The default encoding for the input file is utf16le. You can use the utf8 encoding by adding the option:

 ```
 csvtoaoa -i <input file> -o <output file> -e utf8
 ```

The following options are valid on the command line:

```
    -V, --version            output the version number
    -i, --input <file>       Input file (required)
    -o, --output <file>      Output file (required)
    -e, --encoding [string]  Encoding of csv file. Could be only utf8 or utf16le. Default utf16le
    -h, --help               output usage information
```