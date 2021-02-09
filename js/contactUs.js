window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above
    var form = document.getElementById("email-form-2");
    var button = document.getElementById("email-form-2-button");
    var status = document.getElementById("print-message");
    var status2 = $("#print-message");
    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
        status.style ="display: block ";
    }
    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }
    // handle the form submission event
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}