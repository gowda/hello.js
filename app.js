var hello = require('./lib/hello');

(function() {
  hello.ask_name(function(name) {
    hello.say_hello(name);
  });
})();
