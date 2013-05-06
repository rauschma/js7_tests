describe('Search suite', function() {
    it('getElementsInsideClassWithTagName', function() {
        var lis = search.getElementsWithTagAndClass('li', 'testClass');
        var liIds = Array.prototype.map.call(lis, function (li) {
            return li.dataset.testid;
        });
        expect(liIds).toEqual([ '1', '4' ]);
    });
    it('getListItemsInside', function() {
        var lis = search.getListItemsInside('divWithContent');
        var liIds = Array.prototype.map.call(lis, function (li) {
            return li.dataset.testid;
        });
        expect(liIds).toEqual([ '1', '2', '3', '3a', '3b', '4' ]);
    });
});
