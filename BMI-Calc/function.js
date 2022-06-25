function checkvalidity(styles, identifier) {
    if (identifier == "h") {
        if (styles.contains("btn-success") && counter_height <= 8) {
            counter_height = counter_height + 0.1;
        } else if (styles.contains("btn-danger") && counter_height > 4) {
            counter_height = counter_height - 0.1;
        } else {
            counter_height = 5.5;
        }
        height.innerText = counter_height.toPrecision(2) + " ft.";
    }
    if (identifier == "w") {
        if (styles.contains("up") && counter_weight < 130) {
            counter_weight = counter_weight + 1;
        } else if (styles.contains("down") && counter_weight > 10) {
            counter_weight = counter_weight - 1;
        }
        weight.innerText = counter_weight + " Kg.";
    } else {
        if (styles.contains("up") && counter_age < 90) {
            counter_age = counter_age + 1;
        } else if (styles.contains("down") && counter_age > 18) {
            counter_age = counter_age - 1;
        }
        age.innerText = counter_age + " Y.";
    }
}
var counter_height = 5.5;
var counter_weight = 40;
var counter_age = 18;
var height = document.getElementById("height");
var weight = document.getElementById("weightdisplay");
var age = document.getElementById("agedisplay");
var bttn_up_down_h = document.querySelectorAll("#height-control > button");
var bttn_up_down_w = document.querySelectorAll("#weightcontainer > button");
var bttn_up_down_a = document.querySelectorAll("#agecontainer > button");
height.innerText = counter_height + " ft.";
weight.innerText = counter_weight + " Kg.";
age.innerText = counter_age + " Y.";
bttn_up_down_h.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        styles = e.currentTarget.classList;
        checkvalidity(styles, "h");
    });
});
bttn_up_down_w.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        styles = e.currentTarget.classList;
        checkvalidity(styles, "w");
    });
});
bttn_up_down_a.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        styles = e.currentTarget.classList;
        checkvalidity(styles, "a");
    });
});
weight.addEventListener("click", function (e) {
    weight.classList.toggle("d-none");
    document.getElementById("weightinput").classList.toggle("d-none");
});
document
    .getElementById("weightinput")
    .addEventListener("keyup", function (e) {
        if (e.key == "Enter") {
            weight.classList.toggle("d-none");
            document.getElementById("weightinput").classList.toggle("d-none");
            counter_weight = document.getElementById("weightinput").value
            weight.innerText =
                document.getElementById("weightinput").value + " Kg.";
            console.log(1);
        }
    });
age.addEventListener("click", function (e) {
    age.classList.toggle("d-none");
    document.getElementById("ageinput").classList.toggle("d-none");
});
document
    .getElementById("ageinput")
    .addEventListener("keyup", function (e) {
        if (e.key == "Enter") {
            age.classList.toggle("d-none");
            document.getElementById("ageinput").classList.toggle("d-none");
            counter_age = document.getElementById("ageinput").value
            age.innerText = document.getElementById("ageinput").value + " Kg.";
            console.log(1);
        }
    });
document.getElementById("offcanvas").addEventListener("click", function () {
    result = counter_weight / ((counter_height * 0.3048) ** 2)
    if (result < 18.5) {
        document.querySelectorAll(".offcanvas-body span")[1].style.color = "red";
        document.querySelectorAll(".offcanvas-body span")[1].textContent = " (which is low)"
    }
    else if (result > 18.5 && result <= 25) {
        document.querySelectorAll(".offcanvas-body span")[1].style.color = "blue";
        document.querySelectorAll(".offcanvas-body span")[1].textContent = " (which is normal)"
    }
    else {
        document.querySelectorAll(".offcanvas-body span")[1].style.color = "red";
        document.querySelectorAll(".offcanvas-body span")[1].textContent = " (which is high)"
    }
    document.querySelectorAll(".offcanvas-body span")[0].textContent = result.toPrecision(4)
    console.log(result);
})