import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  origin: DS.attr('string'),
  datasource: DS.attr('string'),
  pubDate: DS.attr('string'),
  resourceMap: DS.attr('string'),

  citation: computed('id', 'title', function() {
    return `Citation: ${this.get('title')}. ${this.get('id')}`;
  }),
});
