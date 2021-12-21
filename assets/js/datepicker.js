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

function getFechaEmision(){
  return $("#fecha_emision").val();
}

function getFechaTermino(){
  return $("#fecha_termino").val();
}

function getFechaInput(id_input){
  return $("#"+id_input).val();
}