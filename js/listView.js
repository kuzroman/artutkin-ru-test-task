export var ListV = Backbone.View.extend({
  initialize: function () {
    this.setElement('.list');
    this.render();
  },
  render: function () {
    var self = this;
    _.each(this.collection.models, function (model) {
      var item = new ListItemV({model: model});
      self.$el.append(item.$el);
    });
  }
});

var ListItemV = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#listItem').html()),
  initialize: function () {
    this.render();
    this.listenTo(this.model, 'change:active', this.changeActive);
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },
  changeActive: function () {
    if (this.model.get('active')) this.$el.addClass('active');
    else this.$el.removeClass('active');
  }
});