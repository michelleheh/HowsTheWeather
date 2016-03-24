var EntryView = Backbone.View.extend({

  className: 'entry', // see class to 'list' so that css can style it
  // not provided by Backbone but is a convention to set it to 'template'; see line 20 and underscore documents where _.templete returns a function;
  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {
    // use template to replace tokens
    var entry = this.template({
      weather: this.model.get('weather'),
      unit: this.model.get('unit'),
      city: this.model.get('city')
    });

    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleUnit();

  }

});
