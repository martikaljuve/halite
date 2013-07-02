// Generated by CoffeeScript 1.6.3
(function() {
  var ssFilter;

  ssFilter = angular.module('ssFilter', []);

  ssFilter.filter('capitalcase', function() {
    var filter;
    filter = function(input) {
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    return filter;
  });

  ssFilter.filter('titlecase', function() {
    var filter;
    filter = function(input) {
      var chunk, chunks, i, _i, _len;
      chunks = input.split(" ");
      for (i = _i = 0, _len = chunks.length; _i < _len; i = ++_i) {
        chunk = chunks[i];
        chunks[i] = chunk.substring(0, 1).toUpperCase() + chunk.substring(1);
      }
      return chunks.join(" ");
    };
    return filter;
  });

}).call(this);