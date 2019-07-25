import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';
import config from '../config/environment';

export default DS.Adapter.extend({
  findRecord(store, type, id) {
    const fields = ["id", "fileName", "formatId", "formatType", "size"];

    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`${config.cnBaseURL}/query/solr/?q=resourceMap:"${id}"&fl=${fields.join(',')}+desc&rows=1000&wt=json`).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
