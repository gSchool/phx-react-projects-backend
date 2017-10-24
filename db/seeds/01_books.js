
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { title: 1, author: 'rowValue1', pages: 55 },
        { title: 2, author: 'rowValue2', pages: 55 },
        { title: 3, author: 'rowValue3', pages: 55 }
      ]);
    });
};
