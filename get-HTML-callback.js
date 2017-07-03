var https = require("https");
var buffer ="";

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback){

  https.get(options, function(response){
    response.setEncoding("utf8");

    response.on("data", function(data){
      buffer += data.toString();
      callback(buffer);
    })

    response.on("end", function(){
      console.log("Response stream complete.");
    });
  });

}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
