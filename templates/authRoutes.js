"use strict";

const Config = use("Config");
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const loginRoute = Config.get("adonis-auth-scaffold.loginRoute");
const registerRoute = Config.get("adonis-auth-scaffold.registrationRoute");
const registrationSuccessRoute = Config.get("adonis-auth-scaffold.registrationSuccessRedirectTo");
const passwordResetRoute = Config.get(
  "adonis-auth-scaffold.passwordResetRoute"
);
const logoutRoute = Config.get("adonis-auth-scaffold.logoutRoute");

Route.post(loginRoute, "AuthController.login").middleware('guest');
Route.post(registerRoute, "AuthController.register");
Route.post(passwordResetRoute, "AuthController.forgotPassword");

Route.get(registerRoute, "AuthController.getRegister");
Route.get(loginRoute, "AuthController.getLogin");
Route.get(passwordResetRoute, "AuthController.getResetPassword");
Route.get(logoutRoute, "AuthController.getLogout");
Route.get(registrationSuccessRoute, "AuthController.getAuthDashboard");
