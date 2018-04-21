import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';

export default DS.Adapter.extend({
  query(store, type, params) {
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`https://cn-stage.test.dataone.org/cn/v2/query/solr/?wt=json&fl=id,title,origin,datasource,pubDate&rows=10&q=${params}+AND+formatType:METADATA`).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
