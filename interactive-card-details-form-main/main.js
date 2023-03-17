const letters = /^[A-Za-z]*$/;
const numbers = /^[0-9]*$/;


let num_inputs = document.querySelectorAll("input[type=number]");



let card_num = document.querySelector(".card-number");
let card_name = document.querySelector(".card-name");
let card_date = document.querySelector(".card-expiry-date");
let card_cvc = document.querySelector(".card-cvc")

let form_name = document.querySelector(".form-name");
let form_num = document.querySelector(".form-number");
let form_num_input = document.querySelector(".form-number input");
let form_num_warning = document.querySelector(".form-number .warning");
let form_mm = document.querySelector(".mm");
let form_yy = document.querySelector(".yy");
let form_cvc = document.querySelector(".cvc");
let date_warning = document.querySelector(".field .warning");
let date_warning_input = document.querySelectorAll(".field input");
form_num.addEventListener("input", function(e){
    let num = e.target.value;
    let valid = numbers.test(num);
    if(!valid) {
        form_num_input.style.cssText = "border: 1px solid red";
        form_num_warning.style.scale = "1";
    }
    else if(valid) {
        form_num_warning.style.scale = "0"; 
        form_num_input.style.cssText = "border: 1px solid lightgrey";
    }
})


num_inputs.forEach(num => num.addEventListener("input", function(e){
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);

    let num = e.target.value;
    let valid = (num == "" || num.length <= 1);
    if(valid) {
        date_warning_input.forEach(el => 
            el.style.cssText = "border: 1px solid red"
        )        
        date_warning.style.scale = "1";
    }
    else if(!valid) {
        date_warning.style.scale = "0"; 
        date_warning_input.forEach(el => 
            el.style.cssText = "border: 1px solid lightgrey"
        )  
        
    }
   

    
}))


