class InputValidator{

	static init(selector){
		console.log('InputValidator.init() - I am a static validator')
	
		const $fields = document.querySelectorAll(selector)
		$fields.forEach(($field) => {

			/*const instance = */ new this($field) // Creating a new instance using "new" this is a special keyword to point to "it". When the class is called only focus on this specific class when the init method is called it will create a a this keyword for the method that called it. this is used to create our child classes - JS knows to use whichever class that's an entry point
		})
	}

	constructor(domElement){
		console.log('InputValidator()', domElement); //constructor sees a dom element and assigns is to this.field
		
		this.$field = domElement //the constructor is taking a parameter that we're calling domElement
		this.errors = []

		this.setupListeners()
		// this.validate()
		// this.showErrors()

	} //this will be all common functionality between all inputs

	validate = (el) => {
		console.log('InputValidator.validate')

	}

	setupListeners = () => {
		console.log('InputValidator.setupListeners')

		// Using () => this.validate() defers the code to listen to just listen to input.validator. (Do it when then keyup happens) evaluation of which
		// validate() method to call until  the keyup event fires, allowing 
		// it to use the validate() in the child class.
		// ** On keyup run this function, which is found in required-fieldvalidator
		this.$field.addEventListener('keyup', () => this.validate()) //run it in the child class 

		// Using this.showErrors binds the callback immedietly to the event - within input.validator
		this.$field.addEventListener('keyup', this.showErrors)

	}

	showErrors = () => {
        
        let previousError = document.querySelector('.errors');
        console.log(" this is", previousError)

        if(previousError !== null){
            document.body.removeChild(previousError);

        }

        let errorBox = document.createElement("div");
        errorBox.classList.add('errors')
        errorBox.innerHTML = this.errors;
        document.body.append(errorBox);

        if(errorBox.innerHTML){
            this.$field.style.border = '1px solid red';
        } 

        console.log('InputValidator.showErrors', this.errors);
       
    }
}











