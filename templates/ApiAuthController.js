"use strict";
const MAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Persona = use("Persona");
const Config = use("Config");
const ReqPromise = use('request-promise');
const fetch = use('node-fetch');

const { validate } = use("Validator");

class ApiAuthController {
  async attemptLogin(auth, uid, password) {
    // Determine which JWT authenticator will be used: Email or Username.
    // If the uid value matches the test pattern, Email authentication is used.
    let authBy = MAIL_PATTERN.test(uid) ? 'Email': 'Username';
    const authScheme = `jwt${authBy}`;

    return auth
            .authenticator(authScheme)
            .withRefreshToken()
            .attempt(uid, password)
  }

  async login({ request, auth, response }) {
    const { uid, password } = request.only(["uid", "password"]);

    return this.attemptLogin(auth, uid, password);
  }

  async register({ request, auth, response }) {
    const payload = request.only([
      "email",
      "username",
      "password",
      "password_confirmation"
    ]);

    const validation = await validate(
      payload,
      Config.get("adonis-auth-scaffold.validationRules.registration"),
      Config.get("adonis-auth-scaffold.validationMessages")()
    );

    if (validation.fails()) {
      return {
        errors: validation.messages()
      }
    }

    try {
      const user = await Persona.register(payload);

      return this.attemptLogin(auth, payload.email, payload.password);
    } catch (error) {
      return {
        error
      }
    }
  }

  async forgotPassword({ request, response, auth }) {
    const payload = request.only(['password', 'password_confirmation', 'token', 'uid']);
    const { token, uid, password } = payload

    if (!token) {
      const passwordRequest = await Persona.forgotPassword(uid);
      return {
        message: 'Successfully sent reset message'
      }
    }

    try {
      const user = await Persona.updatePasswordByToken(token, payload);

      return await this.attemptLogin(auth, uid, password);
    } catch (error) {
      if (error.name === 'InvalidTokenException') {
        return {
          errorMessage: 'The token supplied is not valid.'
        }
      }
    }
  }
}

module.exports = ApiAuthController;
