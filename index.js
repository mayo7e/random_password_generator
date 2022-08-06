const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?",
"/"];


let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generatePassword = document.getElementById ("generate-Password")

generatePassword.addEventListener("click", getPassword)

function getPassword (){
      passwordOne.textContent = ""
      passwordTwo.textContent = ""
    
    for(let i =0; i < 16; i++){
      let randomIndexOne = Math.floor( Math.random()*characters.length)
      let randomIndexTwo = Math.floor( Math.random()*characters.length)
      
      let randomCharacterOne = characters[randomIndexOne]
      let randomCharacterTwo = characters[randomIndexTwo]
      
      passwordOne.textContent += randomCharacterOne
      passwordTwo.textContent += randomCharacterTwo 
    }
}


