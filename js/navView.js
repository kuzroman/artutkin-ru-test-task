export var NavigationV = Backbone.View.extend({
  events: {
    'click i:first': 'left',
    'click i:last': 'right'
  },
  initialize: function () {
    this.currentId = this.collection.activeModel;
    this.setElement('.nav');
  },
  left: function () {
    var Id = +this.collection.activeModel - 1;
    if (0 < Id) this.collection.changeActive(Id);
  },
  right: function () {
    var id = +this.collection.activeModel + 1;
    if (id <= this.collection.length) this.collection.changeActive(id);
  }
});