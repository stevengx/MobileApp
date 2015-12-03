
$(document).on("pageinit","#welcomepage",function(){
  $("#welcomepage").on("tap",function(){
    $.mobile.changePage("cities.html",{transition:"slide"});
  });                       
});