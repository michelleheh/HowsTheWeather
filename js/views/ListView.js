var ListView = Backbone.View.extend({
  // if el is not set, default to <div>
  id: 'list', // see id to 'list' so that css can style it

  initialize: function() {
    // listenTo is a event provided by BackBone
    // this.collection.on('add', this.render, this); // also works 
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function() {

    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
  }

});
