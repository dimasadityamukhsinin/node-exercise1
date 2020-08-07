const validator = require('validator');
const chalk = require('chalk');

const checkEmail = (email,username) => {
    if(validator.isEmail(email)) {
        return console.log(chalk.green(`Selamat datang ${username}. Email kamu adalah ${email} :)`))
    }else {
        return console.log(chalk.red(`Maaf email yang anda masukkan tidak valid!`))
    }
}

module.exports= ({
    checkEmail
})