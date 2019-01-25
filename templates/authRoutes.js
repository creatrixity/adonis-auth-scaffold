"use strict";
/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
| Contains routes for authentication
| routes for different URL's and bind Controller actions to them.
|
*/

const Route = use("Route");

Route.get("/login", "AuthController.login");
Route.get("/register", "AuthController.register");
