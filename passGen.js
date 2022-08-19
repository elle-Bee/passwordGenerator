const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
"1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = []
let passord2 = []

let pass1El = document.querySelector("#pass1-el")
let pass2El = document.querySelector("#pass2-el")




function generatePassword(){
    pass1El.textContent = renderPassword()
    pass2El.textContent = renderPassword()
}

function renderPassword(){
    let password = [];
    
    for(let i=0; i<15 ; i++){
        password.push(characters[Math.floor( 95* Math.random() )])
    }
    return password.join("")
}

