var Preview = Ember.Application.create();

Preview.Content = Ember.Object.extend();

Preview.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Preview.Content.create({ inputText: '*Empty* content' });
  }
});
