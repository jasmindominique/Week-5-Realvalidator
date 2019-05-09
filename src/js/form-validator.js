class FormValidator{
	constructor(){
		console.log('FormValidator()');
		new RequiredFieldValidator('[data-required]') //[ ] means that we're referring to elements on the dom element. Anything that has "data-required" attached.
	}
}