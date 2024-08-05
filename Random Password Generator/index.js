const pass = document.getElementById("pass");
const length = 12;

const lowercase = "abcefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "!@#$%^&*()_+{}:<>?/[];,.";

const allChars = lowercase + uppercase + number + symbol;

function generatePass(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    pass.value = password;
}

function copyPass(){
    pass.select();
    document.execCommand("copy");

}

    

