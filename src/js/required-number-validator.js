class RequiredNumberValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(domElement, numbersToCheck){ //this is the second parameter or argument that the constructor is looking for. character to check is what has to be 
		super(domElement) //call the constructor from input validator.....can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
			
		this.numbersToCheck=numbersToCheck // remember this variable - keep track of this wherever it is in our class

		console.log('RequiredNumberValidator', domElement, charactersToCheck)
	}

		validate = () => {
			this.errors = [];

			let ageInput = this.$field.value;

			// let lowAge = this.numbersToCheck[0];
			// let highAge = this.numbersToCheck[this.numbersToCheck.length - 1];

			// if (!(ageInput.length == 10 || ageInput.length == 11)) {
			//     alert("Please enter a valid age")
			//     return false
				
			// 	}

			let numbersError = false;

			 let lowAge = 18; //between - 18 & 35

			let highAge = 35;
			

			if (ageInput < lowAge){
				console.log(ageInput + 'this is too young')
			} else if (highAge > ageInput){
				alert("Sorry, only people over the age of "+lowAge+"may enter this form")
			} else {
				numbersError = true;
			}
				if (numbersError == false){
					this.errors.push ('An age between' + 'lowAge' + 'highAge' + 'is required for this form')
				}
			}
		}

		// 	let lowAge = 18; //between - 18 & 35

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
	
