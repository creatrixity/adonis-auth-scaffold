'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddAccountStatusToUsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('account_status', 15).notNullable().defaultTo('pending');
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('account_status');
    })
  }
}

module.exports = AddAccountStatusToUsersSchema
