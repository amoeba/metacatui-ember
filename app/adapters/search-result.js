import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';
import config from '../config/environment';

export default DS.Adapter.extend({
  query(store, type, params) {
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`${config.cnBaseURL}/query/solr/?wt=json&fl=id,title,origin,datasource,pubDate,resourceMap&rows=10&q=${params.q}+AND+formatType:METADATA+AND+resourceMap:*`).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
