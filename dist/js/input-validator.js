"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputValidator =
/*#__PURE__*/
function () {
  _createClass(InputValidator, null, [{
    key: "init",
    value: function init(selector) {
      var _this = this;

      console.log('InputValidator.init() - I am a static validator');
      var $fields = document.querySelectorAll(selector);
      $fields.forEach(function ($field) {
        /*const instance = */
        new _this($field); // Creating a new instance using "new" this is a special keyword to point to "it". When the class is called only focus on this specific class when the init method is called it will create a a this keyword for the method that called it. this is used to create our child classes - JS knows to use whichever class that's an entry point
      });
    }
  }]);

  function InputValidator(domElement) {
    var _this2 = this;

    _classCallCheck(this, InputValidator);

    _defineProperty(this, "validate", function (el) {
      console.log('InputValidator.validate');
    });

    _defineProperty(this, "setupListeners", function () {
      console.log('InputValidator.setupListeners'); // Using () => this.validate() defers the code to listen to just listen to input.validator. (Do it when then keyup happens) evaluation of which
      // validate() method to call until  the keyup event fires, allowing 
      // it to use the validate() in the child class.
      // ** On keyup run this function, which is found in required-fieldvalidator

      _this2.$field.addEventListener('keyup', function () {
        return _this2.validate();
      }); //run it in the child class 
      // Using this.showErrors binds the callback immedietly to the event - within input.validator


      _this2.$field.addEventListener('keyup', _this2.showErrors);
    });

    _defineProperty(this, "showErrors", function () {
      var previousError = document.querySelector('.errors');
      console.log(" this is", previousError);

      if (previousError !== null) {
        document.body.removeChild(previousError);
      }

      var errorBox = document.createElement("div");
      errorBox.classList.add('errors');
      errorBox.innerHTML = _this2.errors;
      document.body.append(errorBox);

      if (errorBox.innerHTML) {
        _this2.$field.style.border = '.2rem solid #EF3933';
      }

      console.log('InputValidator.showErrors', _this2.errors);
    });

    console.log('InputValidator()', domElement); //constructor sees a dom element and assigns is to this.field

    this.$field = domElement; //the constructor is taking a parameter that we're calling domElement

    this.errors = [];
    this.setupListeners(); // this.validate()
    // this.showErrors()
  } //this will be all common functionality between all inputs


  return InputValidator;
}();
//# sourceMappingURL=input-validator.js.map
