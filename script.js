document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const course = document.getElementById('course').value;
  const feedback = document.getElementById('feedback').value.trim();

  if(name && email && course && feedback){
    document.getElementById('message').textContent = 'Thank you for your feedback, ' + name + '!';
    this.reset();
  } else {
    document.getElementById('message').textContent = 'Please fill all fields.';
  }
});
