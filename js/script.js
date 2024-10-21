function replaceName {
    let nickname = prompt("Siapa nama anda", "")
document.getElementById("nickname").innerHTML = nickname
}

document.getElementById("fillnickname").addEventListener("click", function() {
    replaceName();
}

function validateForm {
    const name = document.form["message-form]["name"].value
    const name = document.form["message-form]["email"].value
    const name = document.form["message-form]["message"].value
}

document.getElementById("name"). innerHTML = name;
document.getElementById("email"). innerHTML = email;
document.getElementById("message"). innerHTML = message;

return false;
