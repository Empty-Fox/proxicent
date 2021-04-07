jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
  }, "Letters only please"); 


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
        setTimeout(function(){ 
            $('#email-form-2').show();
            $('#print-message').hide();
            $('#email-form-2')[0].reset();

         }, 3000);
    }
   
});