import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    sourceLookUp(params){
      this.transitionTo('results',params.source);
    }
  }
});
