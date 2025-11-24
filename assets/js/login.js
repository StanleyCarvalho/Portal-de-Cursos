document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (user === 'admin' && pass === '1234') {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'portal.html';
  } else {
    document.getElementById('errorMessage').style.display = 'block';
  }
});
