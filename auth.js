function authenticate (login, password) {
    if (password === 'password' && login === 'login') {
      return 'You were logged in';
    } else {
      return 'Login is incorrect';
    }
  }