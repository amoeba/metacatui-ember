import DS from 'ember-data';
import RSVP from 'rsvp';
import $ from 'jquery';
import config from '../config/environment';

export default DS.Adapter.extend({
  findRecord(store, type, id) {
    return new RSVP.Promise(function(resolve, reject) {
      $.get(`${config.cnBaseURL}/views/metacatui/${id}`).then(function(data) {
        let html = $.parseHTML(data);
        resolve(html);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
