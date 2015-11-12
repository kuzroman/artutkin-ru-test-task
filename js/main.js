'use strict';
var Backbone = require("backbone");

import {peopleArr}   from './data';
import {PeopleC}     from './personModel';
import {PersonV}     from './personView';
import {ListV}       from './listView';
import {NavigationV} from './navView';

var peopleC = new PeopleC(peopleArr);
new PersonV({collection: peopleC});
new ListV({collection: peopleC});
new NavigationV({collection: peopleC});

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    "person/:query": "person"
  },
  index: function () {
    peopleC.changeActive(1);
  },
  person: function (num) {
    peopleC.changeActive(num);
  }
});

new Router();
Backbone.history.start();



