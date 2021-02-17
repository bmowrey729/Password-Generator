var upper= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
            'R','S','T', 'U', 'V','W','X','Y','Z'];

var lower= ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numb= [0,1,2,3,4,5,6,7,8,9,]

var spec= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", writePassword)

var numbchar = 10;

 function writePassword() {
  var password = '';
for (i = 1; i < numbchar; i++){
var indexlower = Math.floor(Math.random() * lower.length)
var indexupper = Math.floor(Math.random() * upper.length)
var indexnumb = Math.floor(Math.random() * numb.length)
var indexspec = Math.floor(Math.random() * spec.length)
upperchoice = upper[indexupper]
lowerchoice = lower[indexlower]
numbchoice = numb[indexnumb]
specchoice = spec[indexspec]
password += upperchoice
password += lowerchoice
password += numbchoice
password += specchoice

passwordText.value = password.substr(1, numbchar);

}
 }






