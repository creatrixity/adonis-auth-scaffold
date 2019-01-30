/**
 * adonis-auth-scaffold
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const _ = require("lodash");
const path = require("path");

const Helpers = use('Helpers')

const { Command } = require("@adonisjs/ace");

class MakeAuth extends Command {
  /* istanbul ignore next */
  /**
   * The command signature.
   *
   * @method signature
   *
   * @return {String}
   */
  /* istanbul ignore next */
  static get signature() {
    return `make:auth`;
  }

  /* istanbul ignore next */
  /**
   * The command description.
   *
   * @method description
   *
   * @return {String}
   */
  static get description() {
    return "Generates the auth scaffold.";
  }

  /**
   * Ensures the command is executed within the project root.
   *
   * @method ensureInProjectRoot
   *
   * @return {void}
   *
   * @private
   */
  async _ensureInProjectRoot() {
    const acePath = path.join(process.cwd(), "ace");
    const exists = await this.pathExists(acePath);

    if (!exists) {
      throw new Error(
        "Oops! Make sure you are inside an Adonisjs app to run the make:auth command."
      );
    }
  }

  /**
   * Creates the AuthController.js file.
   * 
   * @returns {Void} 
   */
  copyAuthController () {
    this.info('Creating Controllers/HTTP/AuthController.js')
    this.copy(
      path.join(__dirname, '../templates', 'AuthController.js'),
      path.join(Helpers.appRoot(), 'app/Controllers/HTTP/AuthController.js')
    )
    this.success('Created Controllers/HTTP/AuthController.js')
  }

  /**
   * Creates the adonis-auth-scaffold.js config file.
   * 
   * @returns {Void} 
   */
  async copyConfig () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', `${packageNamespace}.mustache`),
        path.join(Helpers.configDir(), `${packageNamespace}.js`)
      )
      this.success(`Created config/${packageNamespace}.js`)
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates the auth-styles.css file.
   * 
   * @returns {Void} 
   */
  async copyAuthStyles () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', 'auth-styles.css'),
        path.join(Helpers.publicPath(), 'auth/auth-styles.css')
      )
      this.success('Successfully created public/auth/auth-styles.css')
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates the email view templates files.
   * 
   * @returns {Void} 
   */
  async copyEmailViewTemplates () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', 'password-mail.edge'),
        path.join(Helpers.viewsPath(), 'auth/emails/password.edge')
      )
      await this.copy(
        path.join(__dirname, 'templates', 'welcome-mail.edge'),
        path.join(Helpers.viewsPath(), 'auth/emails/welcome-mail.edge')
      )

      this.success('Created resources/views/auth/emails/password.edge')
      this.success('Created resources/views/auth/emails/welcome-mail.edge')
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates the auth view templates.
   * 
   * @returns {Void} 
   */
  async copyAuthViewTemplates () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', 'dashboard.edge'),
        path.join(Helpers.viewsPath(), 'auth/dashboard.edge')
      )
      await this.copy(
        path.join(__dirname, 'templates', 'login.edge'),
        path.join(Helpers.viewsPath(), 'auth/login.edge')
      )
      await this.copy(
        path.join(__dirname, 'templates', 'register.edge'),
        path.join(Helpers.viewsPath(), 'auth/register.edge')
      )
      await this.copy(
        path.join(__dirname, 'templates', 'password-reset.edge'),
        path.join(Helpers.viewsPath(), 'auth/password-reset.edge')
      )

      this.success('Create resources/views/auth/dashboard.edge')
      this.success('Create resources/views/auth/login.edge')
      this.success('Create resources/views/auth/register.edge')
      this.success('Create resources/views/auth/password-reset.edge')
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates the layout view templates.
   * 
   * @returns {Void} 
   */
  async copyLayoutViewTemplates () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', 'authLayout.edge'),
        path.join(Helpers.viewsPath(), 'layouts/auth.edge')
      )
      this.success('Created resources/views/layouts/auth.edge')
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates the app starter files available at app/start.
   * 
   * @returns {Void} 
   */
  async copyAppStarterFiles () {
    try {
      await this.copy(
        path.join(__dirname, 'templates', 'authRoutes.js'),
        path.join(Helpers.basePath(), 'start/authRoutes.js')
      )
      await this.copy(
        path.join(__dirname, 'templates', 'events.js'),
        path.join(Helpers.basePath(), 'start/authEvents.js')
      )

      this.success('Created start/authRoutes.js')
      this.success('Created start/authEvents.js')
    } catch (error) {
      // ignore error
    }
  }

  /**
   * Creates all scaffold templates.
   * 
   * @returns {Void} 
   */
  async _copyFiles () {
    this.copyAuthController();
    // await this.copyConfig()
    // await this.copyAuthStyles()
    // await this.copyEmailViewTemplates()
    // await this.copyAuthViewTemplates()
    // await this.copyLayoutViewTemplates()
    // await this.copyAppStarterFiles()
  }

  /**
   * Method executed by ace when command is called. It
   * will create a new sample test for the user.
   *
   * @method handle
   *
   * @param  {Boolean} options.slim
   * @param  {Boolean} options.full
   *
   * @return {void}
   */
  async handle({}, { slim, full }) {
    try {
      await this._ensureInProjectRoot();
      await this._copyFiles();
    } catch (error) {
      /**
       * Throw error if command executed programatically
       */
      if (!this.viaAce) {
        throw error;
      }
      this.error(error.message);
    }
  }
}

module.exports = MakeAuth;
