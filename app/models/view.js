import DS from 'ember-data';

export default DS.Model.extend({
  html: DS.attr(),
  package: DS.belongsTo('package')
});
