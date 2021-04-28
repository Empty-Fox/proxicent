jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 

//   jQuery.validator.addMethod("regex_password", function(password) {
//     return this.optional(password) || /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i.test(password);

// }, "Check password"); 

jQuery.validator.addMethod("regex_password", function(value, element) {
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value);
}, "The password must contain at least one uppercase letter, one lowercase letter, and one digit. The password must be at least 8 characters long");



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

$('#form-signup').validate({
    rules: {
        email_signup: {
            required: true,
            email: true
        },
        password_signup: {
            required: true,
            regex_password:true   
        },
    },
    messages: {
        email_signup: {
            required: 'The Email field is required'
        },
        password_signup: {
            required: 'The Password field is required'
        }
    },
    submitHandler: function () {
        $('#form-signup')[0].reset();
    }
});



