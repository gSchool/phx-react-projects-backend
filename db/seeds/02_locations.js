
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {name: 'Das Auto Sales', address: '123 Main St.'},
        {name: 'Blahaha Motor Cars', address: '4602 E Blahbe Lane'},
        {name: 'Clockinfrontame Autos', address: '6200 N Sonoma Beach Rd.'}
      ]);
    });
};
