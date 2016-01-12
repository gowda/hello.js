var hello = require('./lib/hello');
var program = require('commander');

(function() {
  program.parse(process.argv);

  if (program.args.length == 0) {
    hello.ask_name(function(name) {
      hello.say_hello(name);
    });
  } else {
    hello.say_hello(program.args[0]);
    if (program.args.length > 1) {
      console.log('');
      console.log("Enclose command-line input in quotes to include spaces in name:");
      console.log("%s \"%s\"", program._name, program.args.join(" "));
    }
  }
})();
