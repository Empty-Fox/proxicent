jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 

jQuery.validator.addMethod("regex_password", function(value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value);
}, "The password must contain at least one uppercase letter, one lowercase letter, and one digit. The password must be at least 8 characters long");

jQuery.validator.addMethod("phone_numberCheck", function(value, element) {
    return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
}, "Check that the phone number is entered correctly");


$('#email-form-2').validate({
    rules:{
        name:{
            required:true,
            minlength:3,
            lettersonly:true
        },
        email:{
            required:true,
            email:true
        },
        subject:{
            required:true,
            minlength:3
        },
        message:{
            required:true,
            minlength:5
        }
    },
    messages: {
        name: {
            required:'The Name field is required',
            minlength:'Name must be longer than 3 characters'
        },
        email:{
            required:'The Email field is required'
        },
        subject:{
            required:'The Subject field is required',
            minlength:'Subject must be longer than 3 characters'
        },
        message:{
            required:'The Subject field is required',
            minlength:'Subject must be longer than 5 characters'
        }
    },
    submitHandler:function(){
        $('#email-form-2').hide();
        $('#print-message').show();
        // form.submit();
        setTimeout(function(){ 
            $('#email-form-2').show();
            $('#print-message').hide();
            $('#email-form-2')[0].reset();          

         }, 3000);
    }
   
});

$('#form-login').validate({
    rules: {
        email_login: {
            required: true,
            email: true
        },
        password_login: {
            required: true,
            regex_password:true   
        },
    },
    messages: {
        email_login: {
            required: 'The Email field is required'
        },
        password_login: {
            required: 'The Password field is required'
        }
    },
    submitHandler: function () {
        $('#form-login')[0].reset();
    }
});

$('#email-form').validate({
    rules: {
        First_Name_2: {
            required:true,
            minlength:3,
            lettersonly:true           
        },
        Last_Name_2: {
            required:true,
            minlength:3,
            lettersonly:true 
        },
        Email_2: {
            required: true,
            email: true
          },
          Contact_Phone_Number_2:{
            required: true,
            phone_numberCheck:true
          }
          
    },
 
    submitHandler: function () {
        $('#email-form').hide();
         $('.w-form-done').show();
        // form.submit();
        setTimeout(function(){ 
            $('#email-form').show();
             $('.w-form-done').hide();
            $('#email-form')[0].reset();          

         }, 3000);
    }
});

$('#email-form-contactPage').validate({
    rules: {
        contact_first_name: {
            required:true,
            minlength:3,
            lettersonly:true           
        },
        contact_last_name: {
            required:true,
            minlength:3,
            lettersonly:true 
        },
        contactEmail: {
            required: true,
            email: true
          },
        contact_phone_contactPage:{
            required: true,
            phone_numberCheck:true
        }          
    },
 
    submitHandler: function () {
        $('#email-form-contactPage').hide();
         $('.w-form-done_contactPage').show();
        // form.submit();
        setTimeout(function(){ 
            $('#email-form-contactPage').show();
             $('.w-form-done_contactPage').hide();
            $('#email-form-contactPage')[0].reset();          

         }, 3000);
    }
});
/////////////////validate SignUp Form/////////////
$(document).ready(function () {
    jQuery.validator.addMethod("lettersonly", function (value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    jQuery.validator.addMethod("regex_password", function (value, element) {
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value);
    }, "The password must contain at least one uppercase letter, one lowercase letter, and one digit. The password must be at least 8 characters long");



    var val = {

      // Specify validation rules
      rules: {
        email_sign_up: {
          required: true,
          email: true
        },
        password_sign_up: {
          required: true,
          regex_password: true
        },
        confirm: {
          required: true,
          equalTo: "#password_sign_up"
        },
        name_sign_up: {
          required: true
        },
        country_sign_up: {
          required: true
        },
        address_sign_up: {
          required: true
        },

        select_Type: {
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
        email_sign_up: {
          required: 'The Email field is required'
        },
        password_sign_up: {
          required: 'The Password field is required'
        },
        confirm: {
          equalTo: 'Please, Enter Confirm Password Same as Password'
        },

        name_sign_up: {
          required: 'The Name field is required'
        },
        country_sign_up: {
          required: 'The Country field is required'
        },
        address_sign_up: {
          required: 'The Address field is required'
        },
        select_Type: {
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
        // defaultStep:0,
        beforeSubmit: function (form, submit) {
          console.log("called before submiting the form");
          // console.log(form);
          // console.log(submit);                 
        },


        validations: val,

      }
    ).navigateTo(0);

  });







