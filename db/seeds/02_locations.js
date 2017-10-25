
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          "name": "Zenolux Auto",
          "address": "482 Fayette Street, Magnolia, Mississippi, 9117"
        },
        {
          "name": "The Zytrex Group",
          "address": "421 Albemarle Terrace, Biehle, Puerto Rico, 2050"
        },
        {
          "name": "Farmage Tracter Sales",
          "address": "811 Nova Court, Snyderville, Florida, 6682"
        },
        {
          "name": "Biospan Auto",
          "address": "796 Bogart Street, Templeton, Utah, 5409"
        },
        {
          "name": "Lyria Car Group",
          "address": "664 Bassett Avenue, Chelsea, North Dakota, 9729"
        },
        {
          "name": "Ronbert Car Sales",
          "address": "702 Covert Street, Sattley, Alabama, 446"
        },
        {
          "name": "Nitracyr Speed Cars Place",
          "address": "334 Tech Place, Calvary, New Hampshire, 3707"
        }
      ]);
    });
};
