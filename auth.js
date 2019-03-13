function authenticate (login, password) {
    if (password === 'password') {
      return 'You were logged in';
    } else {
      return 'Login is incorrect';
    }
  }