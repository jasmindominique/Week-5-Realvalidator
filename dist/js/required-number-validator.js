"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RequiredNumberValidator =
/*#__PURE__*/
function (_InputValidator) {
  _inherits(RequiredNumberValidator, _InputValidator);

  //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
  function RequiredNumberValidator(domElement, numbersToCheck) {
    var _this;

    _classCallCheck(this, RequiredNumberValidator);

    //this is the second parameter or argument that the constructor is looking for. character to check is what has to be 
    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredNumberValidator).call(this, domElement)); //call the constructor from input validator.....can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 

    _defineProperty(_assertThisInitialized(_this), "validate", function () {
      _this.errors = [];
      var ageInput = _this.$field.value; // let lowAge = this.numbersToCheck[0];
      // let highAge = this.numbersToCheck[this.numbersToCheck.length - 1];
      // if (!(ageInput.length == 10 || ageInput.length == 11)) {
      //     alert("Please enter a valid age")
      //     return false
      // 	}

      var numbersError = false;
      var lowAge = 18; //between - 18 & 35

      var highAge = 35;

      if (ageInput < lowAge) {
        console.log(ageInput + 'this is too young');
      } else if (highAge > ageInput) {
        alert("Sorry, only people over the age of " + lowAge + "may enter this form");
      } else {
        numbersError = true;
      }

      if (numbersError == false) {
        _this.errors.push('An age between' + 'lowAge' + 'highAge' + 'is required for this form');
      }
    });

    _this.numbersToCheck = numbersToCheck; // remember this variable - keep track of this wherever it is in our class

    console.log('RequiredNumberValidator', domElement, charactersToCheck);
    return _this;
  }

  return RequiredNumberValidator;
}(InputValidator); // 	let lowAge = 18; //between - 18 & 35
// 	let highAge = 35;
// 	if ((lowAge - highAge) < 0){ //
// 		alert("Sorry, only people over the age of "+lowAge+"may enter this form")
// 		return false;
// 	} 
// 	return true;
// 	}
// }
// if (lowAge > highAge){
// 		console.log(ageInput + 'this is valid')
// 	} else if (lowAge < lowAge.value){
// 		alert("Sorry, only people over the age of "+lowAge+"may enter this form")
// 	} else {
// 		numbersError = true;
// 	}
// 		if (numbersError == false){
// 			this.errors.push ('An age between' + 'lowAge' + 'highAge' + 'is required for this form')
// 		}
//# sourceMappingURL=required-number-validator.js.map
