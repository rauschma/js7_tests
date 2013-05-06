describe('Traverse suite', function() {
    it('traverseElementWithId', function() {
        var tree = (
            'DIV\n' +
            '    #text\n' +
            '    UL\n' +
            '        #text\n' +
            '        LI\n' +
            '            #text\n' +
            '        #text\n' +
            '        LI\n' +
            '            #text\n' +
            '        #text\n' +
            '    #text'
        );
        expect(traverse.traverseElementWithId('divWithContent')).toBe(tree);
    });
});
