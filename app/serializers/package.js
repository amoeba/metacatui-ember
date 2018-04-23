import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    return {
        data: { 
        'id' : id,
        'type' : 'package',
        'attributes' : {
          members: payload.response.docs.map(function(m) {
            m['isMetadata'] = m.formatType === 'METADATA' ? true : false
            return m;
          })
        }
      }
    }
  }
});
