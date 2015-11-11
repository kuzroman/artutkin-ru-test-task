//require('handlebars');
require('handlebars/runtime');
var Backbone = require("backbone");

var Router = Backbone.Router.extend({
  routes: {
    '': 'index'
    , ":query": "person" // #person/some
  },
  index: function () {
    console.log('index');

  },
  person: function (num) {
    console.log('person ' + num);
  }
});

var router = new Router();
Backbone.history.start();