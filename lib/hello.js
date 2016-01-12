var readline = require('readline');

var Hello = function() {
  this.interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
};

Hello.prototype.ask_name = function(callback) {
  var interface = this.interface;
  interface.setPrompt('Please enter your name: ');
  interface.prompt(true);
  interface.on('line', function(line) {
    var name = line.replace(/^\s*(.*?)\s*$/g, '$1');
    callback(name);

    interface.close();
  });
};

Hello.prototype.say_hello = function(name) {
    if (name.length == 0) {
      name = 'world';
    }
    console.log('hello, %s!', name);
};

module.exports = new Hello();
