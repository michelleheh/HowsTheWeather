var AppView = Backbone.View.extend({

  el: '#app', // backbone is give us the $el replacing jQuery

  initialize: function() {
    // this.collection = options.colletion is automaticly set up for us by backbone

    // add child view
    this.title = new TitleView();

    // set data events
    this.input = new InputView({
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });
    //render the view as soon as the view instanticate
    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});
