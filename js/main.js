$(document).ready(function(){
    $("#send").click(function(){
        var name = $("#name").val();
        var message = $("#messge").val();
        var email = $("#email").val();
        var form_data = 'name =' + name + '&email=' + email + '&message=' + message;
        $.ajax({
            url:"../src/contact.php";
            type:"POST",
            data: form_data,
            success: function(html){
                $('#response').html(html);
            }
        })
    })
})

//function sendContact() {
//	
//	
//		jQuery.ajax({
//		url: "../src/contact.php",
//		data:'full-name='+$("#full-name").val()+'&email='+$("#email").val()+'&message='+$(message).val(),
//		type: "POST",
//		success:function(data){
//		$("#mail-status").html(data);
//		},
//		error:function (){}
//		});
//}


//$('form.ajax').on('submit', function() {
//   var that = $(this),
//       url = that.attr('action'),
//       type = that.attr('method'),
//       data:'full-name='+$("#full-name").val()+'&email='+$("#email").val()+'&message='+$(message).val()
//});