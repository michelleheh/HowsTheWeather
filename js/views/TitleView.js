var TitleView = Backbone.View.extend({

  el: '<h1>', // produce a new <h1> element

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.text('How\'s the weather?'); // cannot use el instead of $el, it will only get the '<h1>' tag
    return this;
  }

});
