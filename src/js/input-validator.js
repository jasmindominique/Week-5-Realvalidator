class InputValidator{
	constructor(selector){
		console.log('InputValidator()', selector);
		
		this.setupListeners()
		this.validate()
		this.showErrors()

	} //this will be all common functionality between all inputs

	validate = () => {
		console.log('InputValidator.validate')

	}

	setupListeners = () => {
		console.log('InputValidator.setupListeners')
	}

	showErrors = () => {
		console.log('InputValidator.showErrors')

	}
}

