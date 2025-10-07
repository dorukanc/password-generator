const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const genPassBtn = document.getElementById('password-button');
const passBox1 = document.getElementById('pass-el-1');
const passBox2 = document.getElementById('pass-el-2');

function randItem(arr){
    let randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}


function generateRandomPassword(characters, length){
    let password = ''
    for(let i=0; i < length; i++){
        password += randItem(characters);
    }
    return password;
}


genPassBtn.addEventListener('click', function(){
    passBox1.textContent = generateRandomPassword(characters, 15);
    passBox2.textContent = generateRandomPassword(characters, 15);
});

