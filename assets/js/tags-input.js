function initTags(){
  $(function() {
    'use strict';
  
    $('#tags').tagsInput({
      'width': '100%',
      'height': '75%',
      'interactive': true,
      'defaultText': 'Agregar',
      'removeWithBackspace': true,
      'minChars': 0,
      'maxChars': 20,
      'placeholderColor': '#666666'
    });
  });
}