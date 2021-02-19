//Arrays for password character selection
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//Button event setup to run writePassword function
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", writePassword)


//writePassword function to create password
function writePassword() {

// number of character selection between 8 and 128
  var numbchar = prompt("enter a number between 8 and 128")
  if (numbchar < 8 || numbchar > 128) {
    alert("You entered a invalid number")
    return;
  }
//charactor type selection
  var confirmupper = confirm("Do you want to include upper case letters?");
  var confirmlower = confirm("Do you want to include lower case letters? ");
  var confirmnumb = confirm("Do you want to include numbers?");
  var confirmspec = confirm("Do you want to include special characters? ");

// insuring that at least one charactor type is selected
  if (confirmupper === false && confirmlower === false && confirmnumb === false && confirmspec === false) {
    alert("You must include at least one character type!")
    return;
  }
// returning random selection from arrays
  var password = '';
  for (i = 1; i < numbchar; i++) {
    var indexlower = Math.floor(Math.random() * lower.length)
    var indexupper = Math.floor(Math.random() * upper.length)
    var indexnumb = Math.floor(Math.random() * numb.length)
    var indexspec = Math.floor(Math.random() * spec.length)

    upperchoice = upper[indexupper]
    lowerchoice = lower[indexlower]
    numbchoice = numb[indexnumb]
    specchoice = spec[indexspec]

//including only character types selected
    if (confirmupper === true) {
      password += upperchoice;
    }
    if (confirmlower === true) {
      password += lowerchoice;
    }
    if (confirmnumb === true) {
      password += numbchoice;
    }
    if (confirmspec === true) {
      password += specchoice;
    }
    passwordText.value = password.substr(1, numbchar);

  }

}






