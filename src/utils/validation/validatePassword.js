const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const validatePassword = (password) => {
    let message;
    if(strongRegex.test(password)) {
        message = ""
    } else if(mediumRegex.test(password)) {
        message = ""
    } else {
        message = "Password strength is not strong"
    }

    return message;
}

export default validatePassword;