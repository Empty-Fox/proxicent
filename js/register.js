$(document).ready(function () {
    $("input.firstName, input.lastName").attr("pattern", "[^0-9!@#\\$\\^&%\\*\\(\\)\\+=\\-\\[\\]\\{\\}\\|:<>\\?,\\.']+");
    $("input.email").attr("pattern", "[A-Za-z0-9._%+-]{1,}@[a-zA-Z0-9._%+-]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z0-9._%+-]{2,}[.]{1}[a-zA-Z]{2,})");

    if(typeof getUrlParameter('s') !== 'undefined'){
        $('#traffic-sources').val(getUrlParameter('s'));
    }

    var input = document.querySelector("#phone");
    var iti = intlTelInput(input, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        geoIpLookup: function (callback) {
            $.get("//ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "us";
                callback(countryCode);
            });
        },
         hiddenInput: "full",
        initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        //nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        separateDialCode: true,
        utilsScript: "js/utils.js",
    });
});

function onSubmit(token) {
    //remove errors messages
    var overlay = $('#overlay');
    overlay.show();
    $('.w-file-upload-error-msg').remove();
    //form object
    var form = $('#wf-form-Aff-signup');

    var email = form.find('#email').val();
    validateEmailDomains(email);

    var errors = false;
    var formData = {
        'phone': form.find('.iti__selected-dial-code').text() + form.find('#phone').val(),
        'firstName': form.find('#firstName').val(),
        'lastName': form.find('#lastName').val(),
        'email': email,
        'write-id-here' : form.find('#write-id-here').val(),
        'field-2' : $('#field-2').find(":selected").val()
    };

    //get affiliate code, source and check for spambot
    var notToValidate = {
        cid : (typeof getUrlParameter('cid') === 'undefined') ? '' : getUrlParameter('cid'),
        q : (typeof getUrlParameter('q') === 'undefined') ? '' : getUrlParameter('q'),
        p : (typeof getUrlParameter('p') === 'undefined') ? '' : getUrlParameter('p'),
        c : (typeof getUrlParameter('c') === 'undefined') ? '' : getUrlParameter('c'),
        s : form.find('#traffic-sources').val(),
        checkBot : form.find('#checkbot').val(),
        'g-recaptcha-response': token
    };

    $.each(formData, function (field, value) {
        form.find('#' + field).removeClass('w-border-red');
        if ($.trim(value) === "" || ($.trim(value) === "0" && field === "field-2")) {
            //get name of the input
            var field_name = form.find('#' + field).data('name');

            if (field === 'phone') {
                form.find('#' + field).addClass('w-border-red').closest('div').after('<p class="w-file-upload-error-msg error-message">' + field_name + ' is required</p>');
            } else {
                form.find('#' + field).addClass('w-border-red').after('<p class="w-file-upload-error-msg error-message">' + field_name + ' is required</p>');
            }
            errors = true;
        }
    });

    //check if any errors
    if (errors === false) {
        //merge form data with url params
        $.extend(formData, notToValidate);
        //remove previous errors
        form.find('.w-file-upload-error-msg').remove();
        form.find('input').removeClass('w-border-red');

        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'curl.php',
            data: formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode: true,
        }).done(function (data) {
            if(data.status == false){
                if (data.field === 'g-recaptcha-response' || data.result === 'spam') {
                    window.location.replace('https://supremedia.com/congratulations.html');
                }

                if (data.field === 'phone') {
                    form.find('#' + data.field).addClass('w-border-red').closest('div').after('<p class="w-file-upload-error-msg error-message">' + data.result + '</p>');
                } else {
                    form.find('#' + data.field).addClass('w-border-red').after('<p class="w-file-upload-error-msg error-message">' + data.result + '</p>');
                }
                overlay.hide();
            }else {
                overlay.hide();
                form.hide();
                var validationForm = $('#validationCodeForm');
                validationForm.show();

                validationForm.submit(function (e) {
                    e.preventDefault();
                    //remove errors
                    validationForm.find('#validation-code').removeClass('w-border-red');
                    validationForm.find('.w-file-upload-error-msg').remove();

                    var formData = {
                        'validation_code': validationForm.find('#validation-code').val(),
                        'user_id': data.user_id
                    };

                    if (formData.validation_code === '') {
                        validationForm.find('#validation-code').addClass('w-border-red').after('<p class="w-file-upload-error-msg error-message">Validation code is required</p>');
                    } else {
                        overlay.show();
                        $.ajax({
                            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                            url: 'curl.php?validation-code',
                            //url: ' http://localhost/crm/api/sign-up/validation-code',
                            data: formData, // our data object
                            dataType    : 'json', // what type of data do we expect back from the server
                            encode: true
                        }).done(function (data) {
                            overlay.hide();
                            if(data.status == false) {
                                validationForm.find('#validation-code').addClass('w-border-red').after('<p class="w-file-upload-error-msg error-message">' + data.result + '</p>');
                            }else{
                                window.location.replace(data.redirectUrl);
                            }
                        });
                    }
                });
            }
        })
    }
    else{
        overlay.hide();
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function validateEmailDomains(str){
    var arr = [
        "@jourrapide.com",
        "@armyspy.com",
        "@dayrep.com",
        "@teleworm.us",
        "@rhyta.com",
        "@superrito.com",
        "@gustr.com",
        "@fleckens.hu",
        "@einrot.com",
        "@cuvox.de"
    ];
    for (var i = 0, len = arr.length; i < len; ++i) {
        if (str.indexOf(arr[i]) != -1) {
            // str contains arr[i]
            $.ajax({
                type: 'POST',
                url: "write.php",
                data: {something: str},
                success: function(result) {
                    window.location.href = 'https://supremedia.com/congratulations.html';
                }
            });
        }
    }
}

