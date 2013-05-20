var Form = Ember.Application.create({
    appName: 'Form'
});

Form.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
        firstName: 'Jane',
        lastName: 'Doe',
        notes: 'CEO of ACME Inc.'
    };
  }
});
