function cargar_typeahead(estados){
        $(function() {
          'use strict'

        var substringMatcher = function(strs) {
          return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            var substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            for (var i = 0; i < strs.length; i++) {
              if (substrRegex.test(strs[i])) {
                matches.push(strs[i]);
              }
            }

            cb(matches);
          };
        };

        /*var states = estados;

        $('#the-basics .typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        }, {
          name: 'states',
          source: substringMatcher(states)
        });*/
        
        // constructs the suggestion engine
        /*var states = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.whitespace,
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: states
        });*/

        /*console.log('bloodhound', states);

        $('#bloodhound .typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        }, {
          name: 'states',
          source: states
        });*/





        $('#remitente').typeahead({
          minLength: 1,
          order: "asc",
          hint: true,
          source: estados,
          display: 'nombre',
          callback: {
              onClickAfter: function (node, a, item, event) {
                  /*$("#expediente").focus();
                   $scope.$apply(function () {
                          $scope.origen = item.id_cat_origen;
                          $scope.origen_seleccionado = item.id_cat_origen;
                          $scope.origen_texto_seleccionado = item.descripcion;
                          $scope.origen_siglas_seleccionado = item.siglas;
                          $("#expediente_real").val($("#expediente").val()+"/"+item.siglas);
                  });*/
                  alert("okokok");
              }
          },
          debug: true
      });

        $(".twitter-typeahead").css("width","100%");
        //$('span[text*="File"]').hide();
      });
}
  
