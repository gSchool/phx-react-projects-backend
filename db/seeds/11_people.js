exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([{
          "fname": "Carpenter",
          "lname": "Watts",
          "phone": "+1 (958) 590-3988",
          "email": "carpenterwatts@enerforce.com",
          "company": "Enerforce",
          "address": "365 Woodpoint Road, Hayden, New Jersey 35825",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Jacqueline",
          "lname": "Parker",
          "phone": "+1 (992) 478-3481",
          "email": "jacquelineparker@collaire.com",
          "company": "Collaire",
          "address": "698 Jardine Place, Waverly, Alaska 12490",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Estella",
          "lname": "Rowe",
          "phone": "+1 (880) 405-3037",
          "email": "estellarowe@softmicro.com",
          "company": "Softmicro",
          "address": "939 Jerome Avenue, Mansfield, Wisconsin 57757",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Snyder",
          "lname": "Battle",
          "phone": "+1 (929) 471-2371",
          "email": "snyderbattle@neteria.com",
          "company": "Neteria",
          "address": "510 Frost Street, Ivanhoe, Arizona 84692",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Ellis",
          "lname": "Blake",
          "phone": "+1 (867) 443-3663",
          "email": "ellisblake@quilm.com",
          "company": "Quilm",
          "address": "106 Schroeders Avenue, Holcombe, Ohio 68090",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Mcbride",
          "lname": "Hodges",
          "phone": "+1 (842) 425-3407",
          "email": "mcbridehodges@qnekt.com",
          "company": "Qnekt",
          "address": "967 Lacon Court, Heil, Puerto Rico 53116",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Delores",
          "lname": "Cline",
          "phone": "+1 (974) 585-3530",
          "email": "delorescline@krog.com",
          "company": "Krog",
          "address": "115 Bennet Court, Ilchester, Arkansas 40340",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Battle",
          "lname": "Rojas",
          "phone": "+1 (919) 548-3660",
          "email": "battlerojas@atomica.com",
          "company": "Atomica",
          "address": "161 Midwood Street, Interlochen, Hawaii 60016",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Mitchell",
          "lname": "Shaw",
          "phone": "+1 (900) 514-3269",
          "email": "mitchellshaw@zoarere.com",
          "company": "Zoarere",
          "address": "534 Seton Place, Crucible, Palau 41488",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        },
        {
          "fname": "Blackburn",
          "lname": "Mays",
          "phone": "+1 (836) 535-2790",
          "email": "blackburnmays@cowtown.com",
          "company": "Cowtown",
          "address": "439 Brown Street, Chloride, Louisiana 22881",
          "photo_url": "http://placehold.it/100x100",
          "password": "hello"
        }
      ]);
    });
};