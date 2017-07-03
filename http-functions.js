 var https = require("https");

module.exports = function getHTML (options, callbacks){

  var buffer ="";

  https.get(options, function(response){
    response.setEncoding("utf8");

    response.on("data", function(data){
      buffer += data.toString();
      printHTML(buffer);
    })

    response.on("end", function(){
      console.log("Response stream complete.");
    });
  });
};

function printHTML (html) {
  console.log(html);
}
