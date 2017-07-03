var https = require("https");
var buffer ="";

function getAndPrintHTML(){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
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
getAndPrintHTML();