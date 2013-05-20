var Question = Ember.Application.create();

Question.IndexController = Ember.ObjectController.extend({
    // initial value
    isExpanded: false,

    entry: Object.create({
        question: 'What is the capital of Australia?',
        answer: 'Canberra'
    })

    // Aufgabe: implementiere Actions

});