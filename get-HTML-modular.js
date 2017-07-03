var https = require("https");
var buffer ="";

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options){

  https.get(options, function(response){
    response.setEncoding("utf8");

    response.on("data", function(data){
      buffer += data.toString();
      console.log(buffer);
    })

    response.on("end", function(){
      console.log("Response stream complete.");
    });
  });

}
getAndPrintHTML(requestOptions);