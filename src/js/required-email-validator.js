class RequiredEmailValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(domElement, emailsToCheck){
		super(domElement) //can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
		
		this.emailsToCheck=emailsToCheck 

		console.log('RequiredFieldValidator', domElement, emailsToCheck)
	}

	validate = () => {

		this.errors = [];

		let emails = this.$field.value

		let verifyEmails = new RegExp('.+\@.+\..+')

		let emailError = false;

		if(verifyEmails.exec(emails)){
			emailError = true;
		}
		else{
			console.log('Not a valid email, try again please')
		}

		if(emailError == false){
			this.errors.push("Please enter a valid email.");
		}
	}
}

// if (verifyEmails.exec(email)){
  		
//   		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// 		}
// 		else{
			
// 		}