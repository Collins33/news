import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://newsapi.org/v1/articles?apikey=69bc7302e4004a22907e5f8d8b1454eb&source='+params.source;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.articles;
   });
  }
});
