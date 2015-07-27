(function () {
  "use strict";

  // setter form - creates the contacts app
  angular.module("Contacts", ['ngRoute', 'ngStorage', 'firebase','ngAnimate'])
    .constant("CONTACTS_URL", "http://tekadept.com/api/contacts")
    .constant("FIREBASE_URL", "https://glaring-fire-7316.firebaseio.com/")

}());
