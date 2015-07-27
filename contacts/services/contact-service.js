(function () {
  "use strict";

  angular.module("Contacts").
    service('ContactService', function ($firebaseArray, FIREBASE_URL) {
      var fireRef = new Firebase(FIREBASE_URL);
      var contacts = $firebaseArray(fireRef);
      return {
        getContacts: getContacts,
        getContact: getContact,
        deleteContact: deleteContact,
        addContact: addContact,
        updateContact: updateContact
      };

      // most of the documentation you will need is at:
      // https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebasearray

      // returns all of the contacts
      function getContacts() {
        return contacts.$loaded();
      }

      // returns a single contact (TODO: think of a better way)
      function getContact(id) {
        return contacts.$loaded();
      }

      // deletes a single contact
      function deleteContact(id) {
        var contact = contacts[id];

        contacts.$remove(contact).then(function (data) {
          console.info('Deleted record:' + contact.firstName + ' ' + contact.lastName);
        });
      }

      // adds a new contact
      function addContact(contact) {
        contacts.$add(contact);
      }

      // update a contact
      function updateContact(id, contact) {
        contacts[id] = contact;
        contacts.$save(id);
      }
    });
}());