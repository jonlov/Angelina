$(document).ready(function() {
    function handleForm() {
        $('#formContact').submit(function(event) {
            event.preventDefault();
            var formData = $(this).serializeArray();
            sendForm(formData);
        });
    }

    function sendForm(formData) {
        // $.ajax({
        //     url: 'api/mail/',
        //     method: 'POST',
        //     data: formData,
        //     beforeSend: function() {
        //         $("#formContact :input").attr("disabled", true);
        //         $('.btn-send').prop('disabled', true);
        //
        //     },
        //     complete: function() {
        //         $("#formContact :input").attr("disabled", false);
        //         $('.btn-send').prop('disabled', false);
        //     },
        //     success: function() {
                $('#formContact').html('');
                $('.alert-danger').addClass('hide');
                $('.alert-success').removeClass('hide').html('Se ha enviado tu mensaje con exito.');
        //     },
        //     error: function() {
        //         $('.alert-success').addClass('hide');
        //         $('.alert-danger').removeClass('hide').html('Hubo un error inesperado, inténtalo de nuevo.');
        //     }
        // })
    }
    handleForm();

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

    $('#formContact').on('input', function() {
        var inputs = $(this).serializeArray();
        for (n in inputs) {
            var input = inputs[n],
                $this = $('#formContact input[name="' + input.name + '"]'),
                invalid = true;

            if (input.name == 'email') {
                if (isValidEmailAddress(input.value)) {
                    $this.removeClass("invalid").addClass("valid");
                    invalid = false;
                } else {
                    $this.removeClass("valid").addClass("invalid");
                    invalid = true;
                }

            } else {
                if (input.name == 'name') {
                    var length = 3,
                     pattername = /^[a-zA-Z]*$/,
                     pattern = pattername.test(input.value);
                } else {
                    var length = 30,
                     pattern = true;
                     $this = $('#formContact textarea[name="' + input.name + '"]');
                }

                if (pattern && input.value.length >= length) {
                    $this.removeClass("invalid").addClass("valid");
                    invalid = false;
                } else {
                    $this.removeClass("valid").addClass("invalid");
                    invalid = true;
                }


            }
            $('.btn-send').prop('disabled', invalid);

        }
    });
    $('.btn-send').prop('disabled', true);
})
