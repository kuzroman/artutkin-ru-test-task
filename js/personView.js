export var PersonV = Backbone.View.extend({
  initialize: function () {
    this.setElement('.person');
    this.listenTo(this.collection, 'change:active ', this.render);
  },
  render: function (model, action) {
    if (action) {
      new PersonShortV({model:model});
      new PersonMoreV({model:model});
    }
  }
});

var PersonShortV = Backbone.View.extend({
  template: _.template($('#personShort').html()),
  initialize: function () {
    this.setElement('.person-short');
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }
});

var PersonMoreV = Backbone.View.extend({
  template: _.template($('#personMore').html()),
  initialize: function () {
    this.setElement('.person-more');
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
