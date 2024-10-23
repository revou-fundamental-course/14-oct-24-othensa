function validateForm() {
    let inputName = document.getElementById("input-name").value;
    if (inputName == "") {
        alert("Fill the blank");
    } else {
        document.getElementById("result-name").innerHTML = inputName;
        console.log(inputName); 
    }
}

function validateForm() {
    let inputEmail = document.getElementById("input-email").value;
    if (inputEmail == "") {
        alert("Fill the blank");
    } else {
        document.getElementById("result-email").innerHTML = inputEmail;
        console.log(inputEmail); 
    }
}

function validateForm() {
    let inputMessage = document.getElementById("input-message").value;
    if (inputMessage == "") {
        alert("Fill the blank");
    } else {
        document.getElementById("result-message").innerHTML = inputMessage;
        console.log(inputMessage); 
    }
}

let start = 0;
otomatic();

function otomatic() {
    const sliders = document.querySelectorAll(".slides");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length) {
       start = 0; 
    }

    sliders[start].style.display = "block";
    console.log("banner" +start)
    start++;

    setTimeout(otomatic, 2000);
}