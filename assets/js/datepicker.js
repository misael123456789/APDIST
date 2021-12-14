function initDatePicker(){
  $(function() {
    'use strict';
  
    if($('.datePickerInput').length) {
      var date = new Date();
      var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      $('.datePickerInput').datepicker({
        format: "yyyy-mm-dd",
        todayHighlight: true,
        autoclose: true
      });
      $('.datePickerInput').datepicker('setDate', today);
    }
  });
}