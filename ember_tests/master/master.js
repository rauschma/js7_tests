var Master = Ember.Application.create();

Master.data = [
    { id: '1', title: 'Title1', authors: 'Authors1', publisher: 'Publisher1' },
    { id: '2', title: 'Title2', authors: 'Authors2', publisher: 'Publisher2' },
    { id: '3', title: 'Title3', authors: 'Authors3', publisher: 'Publisher3' },
    { id: '4', title: 'Title4', authors: 'Authors4', publisher: 'Publisher4' }
];

Master.Router.map(function() {
  this.resource('items', function() {
    this.route('item', { path: ':item_id' });
  });
});

Master.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('items');
  }
});

Master.ItemsRoute = Ember.Route.extend({
  model: function() {
    return Master.data;
  }
});

Master.ItemsItemRoute = Ember.Route.extend({
  model: function(params) {
      var result = null;
      var id = params.item_id;
      Master.data.forEach(function (item) {
          if (id === item.id) {
              result = item;
          }
      });
      return result;
  }
});
