(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'olaolu',
      template: '<h1>Hello Angular by Olaolu</h1>'
    })
    .Class({
      constructor: function() {}
    });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
