class RequiredFieldValidator extends InputValidator { //with using extends - it's a keyword that facilitates the inheretence. These attributed are being added into the Input Validator 
	constructor(domElement){
		super(domElement) //can also be known as new toolTip(selector) - not this exact name but something like that.         //says "hey"! we need to run the constructor of the parent class.                                   //.this is a variable accesible to everyone apart of the chain. With using the required field this is looking for the form - each step has the do with the prefious - first the form - then the browser will search for the required fields - input and lastly  extends -                              this is a child of this are 
		console.log('RequiredFieldValidator', domElement)
	}

	 validate = () => {
        console.log('RequiredFieldValidator.validate', this.$field);
        
        this.errors= [];


       if (this.$field.value){
           console.log('valid!')
       } else{

            //if it has no value
           console.log('invalid')
           //add this message to the this.errors array (see InpuValidator)
           this.errors.push('This field is required.')
           
       }

    }
}