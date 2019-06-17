"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormValidator = function FormValidator() {
  _classCallCheck(this, FormValidator);

  console.log('FormValidator()'); // new RequiredFieldValidator('[data-required]') //[ ] means that we're referring to elements on the dom element. Anything that has "data-required" attached.

  RequiredFieldValidator.init('[data-required]'); //we're changing how we setup our validation. Static method is used to pass the selector and let static method be the entry point.

  RequiredCharacterValidator.init('[data-required="characters"]', ["@"], ["."], ["!"]); //Computer: once the browser runs the required field validator, it'll then run required character validator, the browser will then look for init in input validator. init is our constructor so that we can apply that logic to everything in the field.

  RequiredEmailValidator.init('[data-validate="email"]');
  RequiredNumberValidator.init('[data-required="number"]', ['18', '35']);
};
//# sourceMappingURL=form-validator.js.map
