var casper = require('casper').create();

casper.start('reveal.html');

casper.then(function() {
    // CODE: Test – Content nicht sichtbar
    // CODE: Klick
});

casper.then(function() {
    // CODE: Test – Content sichtbar
});

casper.run(function() {
    this.echo('Done');
    this.exit();
});