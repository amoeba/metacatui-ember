import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';

export default DS.Adapter.extend({
  findRecord(store, type, id) {
    return new RSVP.Promise(function(resolve, reject) {
      $.get(`https://search-stage.test.dataone.org/cn/v2/views/metacatui/${id}`).then(function(data) {
        let html = $.parseHTML(data);
        resolve(html);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
