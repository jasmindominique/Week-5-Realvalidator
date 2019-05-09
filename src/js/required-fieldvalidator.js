class RequiredFieldValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(selector){
		super(selector) //can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
		console.log('RequiredFieldValidator', selector);
	}

	validate = () => { //a child class must have a validate function. 
		console.log('RequiredFieldValidator.validate');

	}
}