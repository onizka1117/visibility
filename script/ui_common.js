$(function(){
  // datepicker
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy/mm/dd"
  });

});
