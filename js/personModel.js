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
    this.activeModel = null;
    this.listenTo(this.model, 'change:active', this.changeActive);
  },
  changeActive: function (num) {
    if (this.activeModel !== null)
      this.get(this.activeModel).set('active', false);

    this.activeModel = num;
    this.get(num).set('active', true);
  }
});
