if (typeof module === 'object') {
    // Node.js
    var define = function (id, depIds, body) {
        var depValues = depIds.map(function (depId) {
            return require(depId);
        });
        module.exports = body(depValues);
    };
} else if (typeof define !== 'function') {
    // Browser, no AMD support
    var define = function (id, depIds, body) {
        var depValues = depIds.map(function (depId) {
            return window[depId];
        });
        window[id] = body(depValues);
    };
}
define('startsWith', [], function () {
    function startsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }
    return startsWith;
});