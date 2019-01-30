"use strict";

/**
 * adonis-auth-scaffold
 *
 * (c) Caleb Mathew <creatrixity@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { ServiceProvider } = require("@adonisjs/fold");

class AdonisAuthScaffoldProvider extends ServiceProvider {
  /**
   * Setup scaffold command for authentications.
   *
   * @method _setupScaffoldCommand
   *
   * @return {void}
   *
   * @private
   */
  _setupScaffoldCommand() {
    this.app.bind("Adonis/Commands/Make:Auth", app =>
      require("../commands/MakeAuth")
    );
  }

  /**
   * Setup scaffold command for authentications.
   *
   * @method _setupScaffoldCommand
   *
   * @return {void}
   *
   * @private
   */
  _setupViewHelperMiddleware() {
    this.app.bind("AdonisAuthScaffold/Middleware/ViewHelper", (app) => {
      const ViewHelper = require('../src/Middleware/ViewHelper')
      return new ViewHelper()
    });
  }

  /**
   * Registers IOC bindings for this package.
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this._setupScaffoldCommand();
    this._setupViewHelperMiddleware();
  }

  /**
   * When provider is booted, fold will call this method.
   *
   * @method boot
   *
   * @return {void}
   */
  boot() {
    const ace = require("@adonisjs/ace");
    ace.addCommand("Adonis/Commands/Make:Auth");
  }
}

module.exports = AdonisAuthScaffoldProvider;
