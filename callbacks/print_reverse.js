//reverses the html string and
//prints to console

var getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html){
  return html.reverse();
}

getHTML(requestOptions, printReverse);