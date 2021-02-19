var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", writePassword)



function writePassword() {


  var numbchar = prompt("enter a number between 8 and 128")
  if (numbchar < 8 || numbchar > 128) {
    alert("You entered a invalid number")
    return;
  }
  var confirmupper = confirm("Do you want to include upper case letters?");
  var confirmlower = confirm("Do you want to include lower case letters? ");
  var confirmnumb = confirm("Do you want to include numbers?");
  var confirmspec = confirm("Do you want to include special characters? ");
  
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
    
    if (confirmupper === true) {
      password += upperchoice;
    }
    if (confirmlower === true) {
    password += lowerchoice;
    }
    if (confirmnumb === true){
    password += numbchoice;
    }
    if (confirmspec === true){
    password += specchoice;
    }

    
    //console.log(confirmlower)
    //console.log(confirmnumb)
    //console.log(confirmspec)
  
    
    passwordText.value = password.substr(1, numbchar);

  }
    
}






