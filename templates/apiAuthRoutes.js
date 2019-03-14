"use strict";

const Config = use("Config");
/*
|--------------------------------------------------------------------------
| API Auth Routes
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
const passwordResetRoute = Config.get(
  "adonis-auth-scaffold.passwordResetRoute"
);
const logoutRoute = Config.get("adonis-auth-scaffold.logoutRoute");

Route.post(`api/v1${loginRoute}`, "ApiAuthController.login");
Route.post(`api/v1${registerRoute}`, "ApiAuthController.register");
Route.post(`api/v1${passwordResetRoute}`, "ApiAuthController.forgotPassword");
Route.get(`api/v1${logoutRoute}`, "ApiAuthController.getLogout");
