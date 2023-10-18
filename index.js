const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("what is your name? ", (nama) => {
    //console.log("your name is ",nama);
rl.question("your phone number is? ", (noTelp) => {
    //console.log("your number phone ",noTelp);
rl.question("your email is? ", (email) => {
    console.log('your name is',nama + ' your phone number is',noTelp + ' your email is',email);
    //console.log('your phone number is',noTelp);
    //console.log('your email is',email)
    rl.close()

})
})
})