var Person = Backbone.Model.extend({
  defaults: {
    first_name: 'first_name',
    last_name: 'last_name',
    age: 'age',
    location: 'location',
    id: 0,
    active: false
  }
});

export var PeopleC = Backbone.Collection.extend({
  model: Person,
  initialize: function () {
    this.listenTo(this.model, 'change:active', this.changeActive);
  },
  changeActive: function (num) {
    this.each(function (model) {
      if (model.get('active') == true) model.set('active', false);
    });
    this.get(num).set('active', true);
  }
});
