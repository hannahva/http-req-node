//transforms html string into ALL CAPS
//and prints to console


var getHTML = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppercase(html){
  return getHTML.toUpperCase();
}

getHTML(requestOptions, printUppercase);