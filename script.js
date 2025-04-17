document.getElementById('sendBtn').addEventListener('click', () => {
  const feedback = document.getElementById('feedbackText').value.trim();
  const username = document.getElementById('username').value.trim();

  if (!feedback) {
    alert('Please write some feedback before sending.');
    return;
  }
  if (!username) {
    alert('Please enter your Discord ID for ping.');
    return;
  }

  fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ feedback, username })
  })
    .then(res => {
      if (res.ok) {
        alert('Thank you! Your feedback has been sent.');
        document.getElementById('feedbackText').value = '';
      } else {
        alert('Failed to send feedback.');
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error sending feedback.');
    });
});
