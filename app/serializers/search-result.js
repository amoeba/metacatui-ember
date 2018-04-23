import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Collapse all multi-valued resourceMap fields into a single value
    let x = payload.response.docs.map(function(d) {
      d['resourceMap'] = d['resourceMap'][0]
      return d;
    })

    // Add 'type' key to each doc
    // TODO: Find a cleaner way to inject this?
    let docs = x.map(function(d) {
      return {
        'id' : d.id,
        'type' : 'search-result',
        'attributes' : d
      }
    })

    return {
      data: docs,
      meta: payload.responseHeader
    }
  }
});
