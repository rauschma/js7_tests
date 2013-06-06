var casper = require('casper').create();

casper.start('form.html');

casper.then(function() {
    // CODE: Fülle Formular aus (firstName, lastName), nicht submitten
});

casper.thenEvaluate(function() {
    // Unfortunately, HTMLFormElement.prototype.submit() does not trigger a submit event...
    // Therefore:
    // CODE (DOM): Klicke auf den Submit-Button
});

casper.then(function() {
    // CODE (im DOM-Kontext): Enthält #result das Ergebnis?
});

casper.run(function() {
    this.echo('Done');
    this.exit();
});