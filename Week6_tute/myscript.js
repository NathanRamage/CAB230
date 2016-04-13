function validate() {
    if (checkName())
    {
        if (checkPassword()) {
            window.alert('Good');
        }
        else {
            window.alert('Bad');
        }
    }
}

// Checks if the Surname field is empty or not
function checkName() {
    var name = document.getElementById('surname').value;

    if (!name.match(/\S/))
    {
        document.getElementById('surnameMissing').style.visibility = 'visible';
        return false;
    }
    else {
        return true;
    }
}

// checks if both the passwords match
function checkPassword() {
    var pWord = document.getElementById('password').value;
    var check = document.getElementById('confirm_pword').value;

    if (!pWord.match(/\S/)) {
        document.getElementById('pass_incorrect').style.visibility = 'visible';
        return false;
    }
    
    if (pWord != check) {
        document.getElementById('pass_incorrect').style.visibility = 'visible';
        return false;
    }
    else {
        return true;
    }
}

function resetNameError() {
    document.getElementById('surnameMissing').style.visibility = 'hidden';
}

function resetPassError() {
    document.getElementById('pass_incorrect').style.visibility = 'hidden';
}
