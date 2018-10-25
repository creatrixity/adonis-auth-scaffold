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
    return `make:auth
       {-s, --slim: Generate basic auth case}
       {-f, --full: Generate all-encompassing auth case}`;
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
   * Generates the test file
   *
   * @method _generateTest
   *
   * @param  {String}      testPath
   * @param  {String}      name
   *
   * @return {void}
   *
   * @private
   */
  async _generateRegisterController(filePath, name) {
    const template = await this.readFile(
      path.join(__dirname, "../templates/RegisterUserController.mustache"),
      "utf-8"
    );
    await this.generateFile(filePath, template, { name });
  }

  _getFilePath() {
    return path.join(process.cwd(), "app/Controllers/Auth");
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
    const basePath = await this._getFilePath();
    const name = `RegisterUserController`;
    const filePath = path.join(basePath, `${name}.js`);
    const incrementalPath = filePath
      .replace(process.cwd(), "")
      .replace(path.sep, "");

    try {
      this._ensureInProjectRoot();
      await this._generateRegisterController(filePath, name);
      this.completed("make:auth", incrementalPath);

      /**
       * Return testPath if command executed programatically
       */
      if (!this.viaAce) {
        return filePath;
      }
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
