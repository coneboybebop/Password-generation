// Variables for passwords
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var random;



function generatePassword() {

  // prompt for character length of password
  input = parseInt(prompt("How many characters would you like your password to be? It must be greater than 8 and less than 128."));

    // if statement when user does not input any value
    if (!input) {

      window.alert("You must select a value.")
      
    }

    // if user goes over or under the character limit
    else if (input > 128 || input < 8) {

      window.alert("You must use the allowed number of characters.")
      
    }

    // if character number selection is correct, confirm character types
    else {

      confirmLower= confirm("Will you use lowercase letters in your password? Click OK for yes, cancel for no.");
      confirmUpper= confirm("Will you use uppercase letters in your password? Click OK for yes, cancel for no.");
      confirmNum= confirm("Will you use numbers in your password? Click OK for yes, cancel for no.");
      confirmSpec= confirm("Will you use special characters in your password? Click OK for yes, cancel for no.")

      };


    // select arrays for password based on user choices 

    // user selects no criteria for characters
    if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpec) {

      criteria = alert("You must select at least one character type!");
    }
    // user selects all criteria for characters
    else if (confirmLower && confirmUpper && confirmNum && confirmSpec) {

      criteria = lower.concat(upper, num, spec);

    }

    // user selects 3 of criteria for characters
    else if (confirmLower && confirmUpper && confirmNum) {

      criteria = lower.concat(upper,num);
    }

    else if (confirmLower && confirmUpper && confirmSpec) {

      criteria = lower.concat(upper,spec);
    }

    else if (confirmLower && confirmNum && confirmSpec) {

      criteria = lower.concat(num,spec);
    }

    else if (confirmUpper && confirmNum && confirmSpec) {

      criteria = upper.concat(num,spec);
    }

    // user selects 2 of criteria for characters

    else if (confirmLower && confirmUpper) {

      criteria = lower.concat(upper);
    }

    else if (confirmLower && confirmNum) {

      criteria = lower.concat(num);
    }

    else if (confirmLower && confirmSpec) {

      criteria = lower.concat(spec);
    }

    else if (confirmUpper && confirmNum) {

      criteria = upper.concat(num);
    }

    else if (confirmUpper && confirmSpec) {

      criteria = upper.concat(spec);
    }

    else if (confirmNum && confirmSpec) {

      criteria = num.concat(spec);
    }

    // user selects 1 of criteria for characters

    else if (confirmLower) {

      criteria = lower;
    }

    else if (confirmUpper) {

      criteria = upper;
    }

    else if (confirmNum) {

      criteria = num;
    }

    else if (confirmSpec) {

      criteria = spec;
    };

    // empty array to use to join results of below for loop
    var password = [];

    // Generate password with for loop
    for (var i = 0; i < input; i++) {
      var random = criteria[Math.floor(Math.random() * criteria.length)];
        password.push(random);
    }

    pw= password.join("");
    
   }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pw;
  
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

