
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
          "read": false,
          "starred": true,
          "labels": JSON.stringify(["dev", "personal"]),
          "body": "DUHHH..."
        },
        {
          "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
          "read": false,
          "starred": false,
          "selected": true,
          "labels": JSON.stringify([]),
          "body": "Call me next time you need help so we can avoid this setback next time ;)"
        },
        {
          "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
          "read": false,
          "starred": true,
          "labels": JSON.stringify(["dev"]),
          "body": "Hyperdrive flux capacitors for everyone!"
        },
        {
          "subject": "We need to program the primary TCP hard drive!",
          "read": true,
          "starred": false,
          "selected": true,
          "labels": JSON.stringify([]),
          "body": "Get on it!"
        },
        {
          "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
          "read": false,
          "starred": false,
          "labels": JSON.stringify(["personal"]),
          "body": "Windows...amirite?"
        },
        {
          "subject": "We need to back up the wireless GB driver!",
          "read": true,
          "starred": true,
          "labels": JSON.stringify([]),
          "body": "We fly to Wisconson on Monday. Pack light, we're taking Ryan Air."
        },
        {
          "subject": "We need to index the mobile PCI bus!",
          "read": true,
          "starred": false,
          "labels": JSON.stringify(["dev", "personal"]),
          "body": "Get your phones, people!"
        },
        {
          "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
          "read": true,
          "starred": true,
          "labels": JSON.stringify([]),
          "body": "Then we can do ABC to the XYZ! This is amateur material! Get into the times!"
        }
      ]);
    });
};
