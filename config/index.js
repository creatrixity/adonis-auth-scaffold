"use strict";

const Env = use('Env');

/*
|--------------------------------------------------------------------------
| Adonis Auth Scaffold
|--------------------------------------------------------------------------
|
| Adonis Auth Scaffold is a CLI utility that gives you a functional authentication
| system in Adonis.js within seconds.
|
*/

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Registration Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle registration GET and POST requests.
  |
  */
  registrationRoute: "/register",

  /*
  |--------------------------------------------------------------------------
  | Registration Success Redirect Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to redirect the user to upon successful registration.
  | Leave empty if you do not want any redirects.
  |
  */
  registrationSuccessRedirectTo: "/auth/dashboard",

  /*
  |--------------------------------------------------------------------------
  | Login Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle login GET and POST requests.
  |
  */
  loginRoute: "/login",

  /*
  |--------------------------------------------------------------------------
  | Password Reset Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle password reset GET and POST requests.
  |
  */
  passwordResetRoute: "/password/reset",

  /*
  |--------------------------------------------------------------------------
  | Logout Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle logout GET and POST requests.
  |
  */
  logoutRoute: "/logout",

  /*
  |--------------------------------------------------------------------------
  | App URL
  |--------------------------------------------------------------------------
  |
  | Specifies the URL for the app.
  |
  */
  appURL: "http://localhost:3333",

  /*
  |--------------------------------------------------------------------------
  | Registration Rules
  |--------------------------------------------------------------------------
  |
  | An object of validation rules to be used when running validation.
  |
  */
  validationRules: {
    registration: {
      email: "required|email",
      username: "required",
      password: "required",
      password_confirmation: "required|same:password"
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Validation messages
  |--------------------------------------------------------------------------
  |
  | An object of validation messages to be used when validation fails.
  |
  */
  validationMessages: action => {
    return {
      "uid.required": "Username or E-mail must be filled.",
      "username.required": "Username must be filled.",
      "email.required": "E-mail must be filled.",
      "email.email": "Please use a valid e-mail address.",
      "password.required": "Password must be filled.",
      "password.mis_match": "Invalid password.",
      "password_confirmation.same": `Password confirmation must be same as password.`
    };
  }
};
