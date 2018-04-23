import DS from 'ember-data';

export default DS.Model.extend({
  fileName: DS.attr('string'),
  formatId: DS.attr('string'),
  size: DS.attr('string')
});
