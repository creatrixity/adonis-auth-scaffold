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
  /**
   * The command signature.
   *
   * @method signature
   *
   * @return {String}
   */
  static get signature() {
    return `make:auth
       {-s, --slim: Generate basic auth case}
       {-f, --full: Generate all-encompassing auth case}`;
  }
}

module.exports = MakeAuth;
