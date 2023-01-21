/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/


(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      var email = document.getElementById('email').value
      var subject = document.getElementById('subject').value
      var name = document.getElementById('name').value
      var message = document.getElementById('message').value

      thisForm.reset();

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      email_form_submit(thisForm , email , subject , name , message);
    });
  });



  function email_form_submit(thisForm, email , subject , name , message){
    Email.send({
    SecureToken : "827c4cd3-0ea5-4faa-8513-03c2c0ed6c16",
    To : email,
    From : "kuete.frank1@gmail.com",
    Subject :subject,
    Body : 'Name of the sender  : ' + name +'<br/> Messsage content : ' + message 
    })
    .then(message =>{
        thisForm.querySelector('.loading').classList.remove('d-block');
        if (!message){
        throw new Error('Form submission failed and no error message returned from' ); 
        }
        else{
          alert('Message have been Sent' + message);
        }
      }
    )
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
