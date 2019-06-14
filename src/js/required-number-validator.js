class RequiredNumberValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(domElement, numbersToCheck){ //this is the second parameter or argument that the constructor is looking for. character to check is what has to be 
		super(domElement) //call the constructor from input validator.....can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
			
		this.numbersToCheck=numbersToCheck // remember this variable - keep track of this wherever it is in our class

		console.log('RequiredNumberValidator', domElement, charactersToCheck)
	}

		validate = () => {
			this.errors = [];

			let numberInput = this.$field.value;

			// if (!(numberInput.length == 10 || numberInput.length == 11)) {
			//     alert("Please enter a valid US phone number.")
			//     return false
				
			// 	}

			let firstNumber = this.numbersToCheck[0]; //between - 10

			let secondNumber = this.numbersToCheck[this.numbersToCheck.length - 1];
			

			if (numberInput > secondNumber){ //

			} else (first > numberInput){

			}
		}

	
