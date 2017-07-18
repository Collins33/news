import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    sourceLookUp(){
      var params={
        source:this.get('source')
      };
      this.sendAction('sourceLookUp',params);

    }
  }
});
