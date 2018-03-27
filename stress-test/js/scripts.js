
$(document).ready(function() {
  $("form#stress").submit(function(event){
    event.preventDefault();


    $("input:checkbox[name=signs]:checked").each(function() {
      var signInput = $(this).val();
      if (signInput >= 3) {
        $("#getHelp").show();
      }
    });

    // $("input:checkbox[name=health]:checked").each(function() {
    //   var signInput = $(this).val();
    //   if (signInput >= 3)
    // }
    // $("input:checkbox[name=handle]:checked").each(function() {
    //   var signInput = $(this).val();
    //   if (signInput < 3)
    // }


  });
});
