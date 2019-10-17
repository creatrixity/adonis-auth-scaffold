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
const packageNamespace = 'adonis-auth-scaffold';

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
    return `
      make:auth
      { --api-only : Generates files for RESTful Apis. }
      { --http-only : Generates files for HTTP client request. }
    `;
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
   * Creates the AuthController.js file for the HTTP client.
   *
   * @returns {Void}
   */
  copyHTTPAuthController () {
    try {
      this.copy(
        path.join(__dirname, '../templates', 'AuthController.js'),
        path.join(Helpers.appRoot(), 'app/Controllers/Http/AuthController.js')
      )

      this.success('Created Controllers/Http/AuthController.js')
    } catch (error) {
      // Output error message to console.
      this.error(error);
    }
  }

  /**
   * Creates the ApiAuthController.js file for the HTTP client.
   *
   * @returns {Void}
   */
  copyApiAuthController () {
    try {
      this.copy(
        path.join(__dirname, '../templates', 'ApiAuthController.js'),
        path.join(Helpers.appRoot(), 'app/Controllers/Http/ApiAuthController.js')
      )
      this.success('Created Controllers/Http/ApiAuthController.js')
    } catch (error) {
      // Output error to console.
      this.error(error);
    }
  }

  /**
   * Creates the adonis-auth-scaffold.js config file.
   *
   * @returns {Void}
   */
  async copyConfig () {
    try {
      await this.copy(
        path.join(__dirname, '../templates', `${packageNamespace}.mustache`),
        path.join(Helpers.configPath(), `${packageNamespace}.js`)
      )
      this.success(`Created config/${packageNamespace}.js`)
    } catch (error) {
      // Output error to console.
      this.error(error);
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
        path.join(__dirname, '../templates', 'auth-styles.css'),
        path.join(Helpers.publicPath(), 'auth/auth-styles.css')
      )
      this.success('Successfully created public/auth/auth-styles.css')
    } catch (error) {
      // Output error to console.
      this.error(error);
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
        path.join(__dirname, '../templates', 'password-mail.edge'),
        path.join(Helpers.viewsPath(), 'auth/emails/password.edge')
      )
      await this.copy(
        path.join(__dirname, '../templates', 'welcome-mail.edge'),
        path.join(Helpers.viewsPath(), 'auth/emails/welcome-mail.edge')
      )

      this.success('Created resources/views/auth/emails/password.edge')
      this.success('Created resources/views/auth/emails/welcome-mail.edge')
    } catch (error) {
      // Output error to console.
      this.error(error)
    }
  }

  /**
   * Creates the partials view templates.
   *
   * @returns {Void}
   */
  async copyPartialsViewTemplates () {
    try {
      await this.copy(
        path.join(__dirname, '../templates', 'password-reset-request-form.edge'),
        path.join(Helpers.viewsPath(), 'auth/partials/password-reset-request-form.edge')
      )
      await this.copy(
        path.join(__dirname, '../templates', 'password-change-form.edge'),
        path.join(Helpers.viewsPath(), 'auth/partials/password-change-form.edge')
      )

      this.success('Created resources/views/auth/partials/password-reset-request-form.edge')
      this.success('Created resources/views/auth/partials/password-change-form.edge')
    } catch (error) {
      // Output error to console.
      this.error(error);
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
        path.join(__dirname, '../templates', 'dashboard.edge'),
        path.join(Helpers.viewsPath(), 'auth/dashboard.edge')
      )
      await this.copy(
        path.join(__dirname, '../templates', 'login.edge'),
        path.join(Helpers.viewsPath(), 'auth/login.edge')
      )
      await this.copy(
        path.join(__dirname, '../templates', 'register.edge'),
        path.join(Helpers.viewsPath(), 'auth/register.edge')
      )
      await this.copy(
        path.join(__dirname, '../templates', 'password-reset.edge'),
        path.join(Helpers.viewsPath(), 'auth/password-reset.edge')
      )

      this.success('Create resources/views/auth/dashboard.edge')
      this.success('Create resources/views/auth/login.edge')
      this.success('Create resources/views/auth/register.edge')
      this.success('Create resources/views/auth/password-reset.edge')
    } catch (error) {
      this.error(error);
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
        path.join(__dirname, '../templates', 'authLayout.edge'),
        path.join(Helpers.viewsPath(), 'layouts/auth.edge')
      )
      this.success('Created resources/views/layouts/auth.edge')
    } catch (error) {
      // Output error to console.
      this.error(error);
    }
  }

  /**
   * Creates the app starter files available at app/start.
   *
   * @param {String} client
   * @returns {Void}
   */
  async copyAppStarterFiles (client) {
    try {
      if (client === 'http') {
        await this.copy(
          path.join(__dirname, '../templates', 'authRoutes.js'),
          path.join(Helpers.appRoot(), 'start/authRoutes.js')
        )
      } else {
        await this.copy(
          path.join(__dirname, '../templates', 'apiAuthRoutes.js'),
          path.join(Helpers.appRoot(), 'start/apiAuthRoutes.js')
        )
      }

      await this.copy(
        path.join(__dirname, '../templates', 'events.js'),
        path.join(Helpers.appRoot(), 'start/authEvents.js')
      )

      const authRoutesSuccessMessage = client ==='http' ? 'Created start/authRoutes.js': 'Created start/apiAuthRoutes.js';

      this.success(authRoutesSuccessMessage)
      this.success('Created start/authEvents.js')
    } catch (error) {
      // Output error to console.
      this.error(error);
    }
  }

  /**
   * Creates the app starter files available at app/start.
   *
   * @returns {Void}
   */
  async copyMiddlewareFiles () {
    try {
      await this.copy(
        path.join(__dirname, '../templates', 'ViewHelper.js'),
        path.join(Helpers.appRoot(), 'app/Middleware/ViewHelper.js')
      )
      this.success('Created app/Middleware/ViewHelper.js')
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * Creates a migration for users table. 
   *
   * @returns {Void}
   */
  async copyMigrationFiles () {
    try {
      const timestamp = new Date().getTime();
      const newFileName = `database/migrations/${timestamp}_add_account_status_to_users_schema.js`;
      await this.copy(
        path.join(__dirname, '../templates', 'migration_add_account_status_to_users_schema.js'),
        path.join(Helpers.appRoot(), newFileName)
      )
      this.success(`Created ${newFileName}`)
    } catch (error) {
      this.error(error);
    }
  }

  /**
   * Creates all scaffold templates.
   *
   * @param {String} client - Specifies if we are generating for an API or HTTP client.
   * @returns {Void}
   */
  async _copyFiles (client) {
    if (client === 'http') {
      await this.copyHTTPAuthController();
    } else {
      await this.copyApiAuthController();
    }

    await this.copyConfig()
    await this.copyAuthStyles()
    await this.copyEmailViewTemplates()
    await this.copyPartialsViewTemplates()
    await this.copyAuthViewTemplates()
    await this.copyLayoutViewTemplates()
    await this.copyAppStarterFiles()
    await this.copyMiddlewareFiles()
    await this.copyMigrationFiles()
  }

  /**
   * Prepends a line of text to a provided file.
   *
   * @param {String} Object.filename - Fully qualified path of the file to be operated on.
   * @param {Number} Object.lineNumber - Line to operate on.
   * @param {String} Object.lineContent - Content to be prepended.
   * @param {String} Object.afterContent - Finds a line with the content specified and adds the new line after it.
   *
   * @return {Void}
   */
  async _prependLineToFile ({
    filename,
    lineNumber,
    lineContent,
    afterContent
  }) {
    let fileContents = await this.readFile(filename, 'utf-8');
    fileContents = fileContents.split("\n");

    if (afterContent) {
      const i = fileContents.findIndex(l => l.includes(afterContent))
      if (i > 0) lineNumber = i + 1;
    }

    if (fileContents[lineNumber] === lineContent) return;

    fileContents.splice(lineNumber, 0, `\n${lineContent}\n`)

    await this.writeFile(filename, fileContents.join('\n'));
  }

  /**
   * Method executed by ace when command is called. It
   * will create a new sample test for the user.
   *
   * @method handle
   *
   * @return {void}
   */
  async handle({}, {
    apiOnly,
    httpOnly
  }) {
    let client;

    if (!apiOnly && !httpOnly) {
      client = await this
        .choice('Will this be used for a REST Api or for a HTTP Client?', [
          {
            name: 'For REST Api',
            value: 'api'
          }, {
            name: 'For HTTP',
            value: 'http'
          }
        ])
    } else {
      client = apiOnly ? 'api': 'http';
    }

    try {
      // Write a module require statement to the routes.js file.
      let routesFilePath = path.join(Helpers.appRoot(), 'start/routes.js');
      let generatedRoutesFilename = apiOnly ? 'apiAuthRoutes.js': 'authRoutes.js';

      await this._prependLineToFile({
        filename: routesFilePath,
        lineNumber: 2,
        lineContent: `require('./${generatedRoutesFilename}');`
      })

      let tokenModelFilePath = path.join(Helpers.appRoot(), 'app/Models/Token.js');
      let tokenModelContent = `  user () {
    return this.belongsTo('App/Models/User')
  }`;

      await this._prependLineToFile({
        filename: tokenModelFilePath,
        afterContent: 'class Token',
        lineContent: tokenModelContent
      })

      await this._ensureInProjectRoot();
      await this._copyFiles(client);
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
