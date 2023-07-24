// function declaration vs function expression
function check_uppercase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase")
    }
}

let chk_uppercase = function check_uppercase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log(str + " has the first character as uppercase");
    } else {
        console.log(str + " does not have the first character as uppercase")
    }
}

chk_uppercase("Kku");
chk_uppercase("kku");