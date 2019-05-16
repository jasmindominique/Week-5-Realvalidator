class FormValidator{
	constructor(){
		console.log('FormValidator()');
		// new RequiredFieldValidator('[data-required]') //[ ] means that we're referring to elements on the dom element. Anything that has "data-required" attached.
		RequiredFieldValidator.init('[data-required]') //we're changing how we setup our validation. Static method is used to pass the selector and let static method be the entry point.
	}
}