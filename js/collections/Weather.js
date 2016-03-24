var Weather = Backbone.Collection.extend({

  model: WeatherEntry,

  addWeatherEntry: function(zipcode) {

    $.get(
      // API call to the openweathermap
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
      function(data) {
        // add is a method for collections
        this.add({
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp.toFixed(2)
          });
      // bind the keyword this to the collection otherwise it's referring to jQuery
      }.bind(this)
    );

  }

});
