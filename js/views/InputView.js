var InputView = Backbone.View.extend({

  // el: '<input>', 
  tagName: 'input', // another way to add a tag
  // event handler for view in BackBone
  events: {
    'keydown': 'keyAction',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  keyAction: function(e) {

    var isEnterKey = (e.which === 13); // 13 is the ENTER key

    if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

      this.$el.attr({
        placeholder: 'Sorry, zip code invalid.'
      });
      this.clearInput();

    } else if(isEnterKey) {

      this.collection.addWeatherEntry(this.$el.val());
      this.resetInput();

    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
