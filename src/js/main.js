$(document).ready(function(){
    //open modal
    $('#open-modal').click(function(){
        $('#modal-to-open').css(
            {
                'display': 'block'
            }
        );
    });

    //close modal
    $('#close-modal').click(function(){
        $('#modal-to-open').css(
            {
                'display' : 'none'
            }
        )
    });

    // send mail with ajax //
    $('#send-email').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
			prenom: $('#prenom').val(),
			message: $('#message').val()
        };
        // AJAX //
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#prenom').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#prenom').val("");
					$('#message').val("")
				}, 3000);
			}
		});
    });
    // End send mail with ajax //
});