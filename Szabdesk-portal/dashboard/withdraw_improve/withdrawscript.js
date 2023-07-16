document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.course-withdraw-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the selected course and reason for withdrawal
      var course = document.getElementById('course').value;
      var reason = document.getElementById('reason').value;
  
      // Generate the message
      var message = 'Your request for withdrawal from the course: (' + course + '\nReason: ' + reason + " ) has been sent to SZABIST. Kindly wait for our response.";
  
      // Display the message
      alert(message);
  
      // Reset the form
      form.reset();
    });
  });