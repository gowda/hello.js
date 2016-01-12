var readline = require('readline');
(function() {
  var rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rlInterface.setPrompt('Please enter your name: ');
  rlInterface.prompt(true);
  rlInterface.on('line', function(line) {
    var name;
    if (line.length == 0) {
      name = 'world';
    } else {
      name = line;
    }
    console.log('hello, %s!', name);
    rlInterface.close();
  });
})();
