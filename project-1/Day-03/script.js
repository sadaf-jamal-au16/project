let generate = document.getElementById("generate")
let upperCase = document.getElementById("upperCase")
let lowerCase = document.getElementById("lowerCase")
let numbers_check = document.getElementById("numbers")
let symbols_check = document.getElementById("symbols")
generate.addEventListener("click", generatePassword)
let copy = document.getElementById("copy")

// copy.addEventListener("click", clipBoard)



const symbols = '~!@#$%^&*()_+{}":?><;.,'

let password = ""
function generatePassword(){
    let len = document.getElementById("length").value
    // let password = Math.floor(Math.random()*length)
     

    for (let i = 0; i < len; i++) {
        if (lowerCase.checked  == true && password.length != len){
            let lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
            password += lower
        }
        if (upperCase.checked  == true && password.length != len){
            let upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            
            password += upper
        }
        if (numbers_check.checked  == true && password.length != len){
            let number = Math.floor(Math.random()*10)
            
            password += number
        }
        if (symbols_check.checked  == true && password.length != len){
            let symbol =  symbols[Math.floor(Math.random() * symbols.length)]
            
            password += symbol
        }
        
    }
    document.getElementById("answer").value = password
    document.getElementById("length").value = ""
}

function myFunction() {
    var copyText = document.getElementById("answer");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    if (password.length!=0){
        alert("Your Password Has Been Copied")
    }
    else{
        alert("Your Have Nothing To Copy")
    }
  }
