$(document).ready(function () {

  function addEventListenersEvents_validate() {
    jQuery.validator.addMethod("lettersonly", function (value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    jQuery.validator.addMethod("regex_password", function (value, element) {
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value);
    }, "The password must contain at least one uppercase letter, one lowercase letter, and one digit. The password must be at least 8 characters long");

    jQuery.validator.addMethod("phone_numberCheck", function (value, element) {
      return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
    }, "Check that the phone number is entered correctly");


    $('#email-form-2').validate({
      rules: {
        first_name: {
          required: true,
          minlength: 3,
          lettersonly: true
        },
        email: {
          required: true,
          email: true
        },
        subject: {
          required: true,
          minlength: 3
        },
        message: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        first_name: {
          required: 'The Name field is required',
          minlength: 'Name must be longer than 3 characters'
        },
        email: {
          required: 'The Email field is required'
        },
        subject: {
          required: 'The Subject field is required',
          minlength: 'Subject must be longer than 3 characters'
        },
        message: {
          required: 'The Subject field is required',
          minlength: 'Subject must be longer than 5 characters'
        }
      }
    });

    $('#form-login').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          regex_password: true
        },
      },
      messages: {
        email: {
          required: 'The Email field is required'
        },
        password: {
          required: 'The Password field is required'
        }
      }
    });

    $('#email-form').validate({
      rules: {
        first_name: {
          required: true,
          minlength: 3,
          lettersonly: true
        },
        last_name: {
          required: true,
          minlength: 3,
          lettersonly: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phone_numberCheck: true
        },
        message: {
          required: true
        }
      }
    });

    $('#email-form-contactPage').validate({
      rules: {
        first_name: {
          required: true,
          minlength: 3,
          lettersonly: true
        },
        last_name: {
          required: true,
          minlength: 3,
          lettersonly: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phone_numberCheck: true
        },
        message: {
          required: true
        }
      }
    });
    /////////////////validate SignUp Form/////////////

    jQuery.validator.addMethod("lettersonly", function (value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    jQuery.validator.addMethod("regex_password", function (value, element) {
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value);
    }, "The password must contain at least one uppercase letter, one lowercase letter, and one digit. The password must be at least 8 characters long");

    var val = {
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          regex_password: true
        },
        confirm_password: {
          required: true,
          equalTo: "#password_sign_up"
        },
        first_name: {
          required: true
        },
        country: {
          required: true
        },
        address: {
          required: true
        },

        select_type: {
          required: true
        },
        'gradeRange[]': {
          required: true
        },
        'trafficRange[]': {
          required: true
        },
        'geoRange[]': {
          required: true
        },
        hear_proxicent: {
          required: true
        },

        promocode: {
          required: true
        },
        'agreeNews[]': {
          required: true
        },
        'agreeTerms[]': {
          required: true
        }
      },
      // Specify validation error messages
      messages: {
        email: {
          required: 'The Email field is required'
        },
        password: {
          required: 'The Password field is required'
        },
        confirm_password: {
          equalTo: 'Please, Enter Confirm Password Same as Password'
        },
        first_name: {
          required: 'The Name field is required'
        },
        country: {
          required: 'The Country field is required'
        },
        address: {
          required: 'The Address field is required'
        },
        select_type: {
          required: 'Please select IM Type!'
        },
        'gradeRange[]': {
          required: "Please select main verticals"
        },
        'trafficRange[]': {
          required: "Please select traffic types"
        },
        'geoRange[]': {
          required: "Please select Geo"
        },
        'agreeNews[]': {
          required: "Choose that you agree to receive the news"
        },
        'agreeTerms[]': {
          required: "Choose that you agree with  terms & conditions"
        }
      }
    }

    $("#signUp_form").multiStepForm(
      {
        // defaultStep: 0,
        // beforeSubmit: function (form, submit) { },
        validations: val,
      }
    ).navigateTo(0);
    ////////////////////////////////////submits Form/////////////

    $('#email-form-2').submit(function (event) {
      event.preventDefault();
      var post_url = $(this).attr("action");
      var request_method = $(this).attr("method");
      var form_data = $(this).serialize();
      $.ajax({
        url: post_url,
        type: request_method,
        data: form_data,
        success: function () {
          $('#email-form-2').hide();
          $('#print-message').show();
          setTimeout(function () {
            $('#email-form-2').show();
            $('#print-message').hide();
            $('#email-form-2')[0].reset();
          }, 3000);
        }
      });

    });
    $('#form-login').submit(function (event) {
      event.preventDefault();
      var post_url = $(this).attr("action");
      var request_method = $(this).attr("method");
      var form_data = $(this).serialize();
      $.ajax({
        url: post_url,
        type: request_method,
        data: form_data,
        success: function () {
          $('#form-login')[0].reset();
        }
      });

    });
    $('#email-form').submit(function (event) {
      event.preventDefault();
      var post_url = $(this).attr("action");
      var request_method = $(this).attr("method");
      var form_data = $(this).serialize();
      $.ajax({
        url: post_url,
        type: request_method,
        data: form_data,
        success: function () {
          $('#email-form').hide();
          $('.w-form-done').show();
          setTimeout(function () {
            $('#email-form').show();
            $('.w-form-done').hide();
            $('#email-form')[0].reset();
          }, 3000);
        }
      });

    });
    $('#email-form-contactPage').submit(function (event) {
      event.preventDefault();
      var post_url = $(this).attr("action");
      var request_method = $(this).attr("method");
      var form_data = $(this).serialize();
      $.ajax({
        url: post_url,
        type: request_method,
        data: form_data,
        success: function () {
          $('#email-form-contactPage').hide();
          $('.w-form-done_contactPage').show();
          setTimeout(function () {
            $('#email-form-contactPage').show();
            $('.w-form-done_contactPage').hide();
            $('#email-form-contactPage')[0].reset();
          }, 3000);
        }
      });

    });
    $('#email-form-signUp_form').submit(function (event) {
      event.preventDefault();
      var post_url = $(this).attr("action");
      var request_method = $(this).attr("method");
      var form_data = $(this).serialize();
      $.ajax({
        url: post_url,
        type: request_method,
        data: form_data,
        success: function () {
          $('#email-form-signUp_form').hide();
          $('.w-form-done_signUp').show();
          setTimeout(function () {
            $('#email-form-signUp_form').show();
            $('.w-form-done_signUp').hide();
            $('#email-form-signUp_form')[0].reset();
          }, 3000);
        }
      });
    });
  }

  window.addEventListener('load', addEventListenersEvents_validate);

});







