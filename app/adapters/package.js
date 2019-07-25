import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';
import config from '../config/environment';

export default DS.Adapter.extend({
  findRecord(store, type, id) {
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`${config.cnBaseURL}/query/solr/?wt=json&fl=id,fileName,formatId,formatType,size&rows=1000&q=resourceMap:"${id}"`).then(function(data) {        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
