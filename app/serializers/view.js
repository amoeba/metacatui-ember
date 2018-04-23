import DS from 'ember-data';

export default DS.Serializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    return {
      data: { 
        'id' : id,
        'type' : 'view',
        'attributes' : {
          'html' : payload[5]
        }
      }
    }
  }
});
