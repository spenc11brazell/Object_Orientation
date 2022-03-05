// console.log('Welcome to your login!')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to your password validator!  Please input a password:", 
    function(input) {
        console.log(input)
        console.log(input.length)

        if (input.length >= 10) {
            console.log('Your passwrod looks great!!!')
        } else {
            console.log('Your password is far too short my frined. Please try again')
        }

reader.close()

});






// const str = 'codeisfun2me. Answer:'
//         console.log(`${str} ${str.length}`)

//     if (!(password.length() <= 10)) {
//         console.log('false')