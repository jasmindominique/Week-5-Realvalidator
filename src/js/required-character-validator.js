class RequiredCharacterValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(domElement, charactersToCheck){ //this is the second parameter or argument that the constructor is looking for. character to check is what has to be 
		super(domElement) //call the constructor from input validator.....can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
			
		this.charactersToCheck=charactersToCheck // remember this variable - keep track of this wherever it is in our class

		console.log('RequiredCharacterValidator', domElement, charactersToCheck)
	}

	 validate = () => {
        console.log('RequiredCharacterValidator.validate', this.$field);

		this.errors = [];

		let characters = this.$field.value

		let verifyCharacters = new RegExp('[A-Za-z]+$')

	}

}