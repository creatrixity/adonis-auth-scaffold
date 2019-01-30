/**
 * adonis-auth-scaffold
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const path = require('path');
const packageNamespace = 'adonis-auth-scaffold';

/**
 * Creates the AuthController.js file.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyAuthController (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'AuthController.js'),
      path.join(cli.appDir, 'Controllers/HTTP/AuthController.js')
    )
    cli.command.completed('create', 'Controllers/HTTP/AuthController.js')
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the adonis-auth-scaffold.js config file.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyConfig (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', `${packageNamespace}.mustache`),
      path.join(cli.helpers.configDir(), `${packageNamespace}.js`)
    )
    cli.command.completed('create', `config/${packageNamespace}.js`)
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the auth-styles.css file.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyAuthStyles (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'auth-styles.css'),
      path.join(cli.helpers.publicPath(), 'auth/auth-styles.css')
    )
    cli.command.completed('create', 'public/auth/auth-styles.css')
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the email view templates files.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyEmailViewTemplates (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'password-mail.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/emails/password.edge')
    )
    await cli.copy(
      path.join(__dirname, 'templates', 'welcome-mail.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/emails/welcome-mail.edge')
    )

    cli.command.completed('create', 'resources/views/auth/emails/password.edge')
    cli.command.completed('create', 'resources/views/auth/emails/welcome-mail.edge')
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the auth view templates.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyAuthViewTemplates (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'dashboard.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/dashboard.edge')
    )
    await cli.copy(
      path.join(__dirname, 'templates', 'login.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/login.edge')
    )
    await cli.copy(
      path.join(__dirname, 'templates', 'register.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/register.edge')
    )
    await cli.copy(
      path.join(__dirname, 'templates', 'password-reset.edge'),
      path.join(cli.helpers.viewsPath(), 'auth/password-reset.edge')
    )

    cli.command.completed('create', 'resources/views/auth/dashboard.edge')
    cli.command.completed('create', 'resources/views/auth/login.edge')
    cli.command.completed('create', 'resources/views/auth/register.edge')
    cli.command.completed('create', 'resources/views/auth/password-reset.edge')
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the layout view templates.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyLayoutViewTemplates (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'authLayout.edge'),
      path.join(cli.helpers.viewsPath(), 'layouts/auth.edge')
    )
    cli.command.completed('create', 'resources/views/layouts/auth.edge')
  } catch (error) {
    // ignore error
  }
}

/**
 * Creates the app starter files available at app/start.
 * 
 * @param {Object} cli - CLI instance object with helper methods.
 * 
 * @returns {Void} 
 */
async function copyAppStarterFiles (cli) {
  try {
    await cli.copy(
      path.join(__dirname, 'templates', 'authRoutes.js'),
      path.join(cli.helpers.basePath(), 'start/authRoutes.js')
    )
    await cli.copy(
      path.join(__dirname, 'templates', 'events.js'),
      path.join(cli.helpers.basePath(), 'start/authEvents.js')
    )

    cli.command.completed('create', 'start/authRoutes.js')
    cli.command.completed('create', 'start/authEvents.js')
  } catch (error) {
    // ignore error
  }
}


module.exports = async cli => {
  await copyConfig(cli)
  await copyAuthController(cli)
  await copyAuthStyles(cli)
  await copyEmailViewTemplates(cli)
  await copyPartialsViewTemplates(cli)
  await copyAuthViewTemplates(cli)
  await copyLayoutViewTemplates(cli)
  await copyAppStarterFiles(cli)
};
