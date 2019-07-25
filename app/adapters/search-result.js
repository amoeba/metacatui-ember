import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';
import config from '../config/environment';

export default DS.Adapter.extend({
  query(store, type, params) {
    const fields = ["id", "title", "origin", "datasource", "pubDate", "resourceMap"];

    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`${config.cnBaseURL}/query/solr/?q=${params.q}+AND+formatType:METADATA+AND+resourceMap:*&fl=${fields.join(',')}&rows=10&wt=json`).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
