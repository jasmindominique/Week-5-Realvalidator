"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormValidator = function FormValidator() {
  _classCallCheck(this, FormValidator);

  console.log('FormValidator()');
  new RequiredFieldValidator('[data-required]'); //[ ] means that we're referring to elements on the dom element. Anything that has "data-required" attached.
};
//# sourceMappingURL=form-validator.js.map
