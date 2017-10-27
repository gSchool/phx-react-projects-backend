exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments();
    table.string('subject');
    table.boolean('starred').defaultsTo(false);
    table.boolean('read').defaultsTo(false);
    table.json('labels')
    table.text('body');
    table.boolean('selected').defaultsTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};