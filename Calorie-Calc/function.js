// Function to check limit for counter
function checkvalidity (styles, identifier) {
  if (identifier == 'h') {
    if (styles.contains('btn-success') && counter_height <= 8) {
      counter_height = counter_height + 0.1
    } else if (styles.contains('btn-danger') && counter_height > 4) {
      counter_height = counter_height - 0.1
    } else {
      counter_height = 5.5
    }
    height.innerText = counter_height.toPrecision(2) + ' ft.'
  }
  if (identifier == 'w') {
    if (styles.contains('up') && counter_weight < 130) {
      counter_weight = counter_weight + 1
    } else if (styles.contains('down') && counter_weight > 10) {
      counter_weight = counter_weight - 1
    }
    weight.innerText = counter_weight + ' Kg.'
  } else {
    if (styles.contains('up') && counter_age < 90) {
      counter_age = counter_age + 1
    } else if (styles.contains('down') && counter_age > 18) {
      counter_age = counter_age - 1
    }
    age.innerText = counter_age + ' Y.'
  }
}
// Variables
var counter_height = 5.5
var counter_weight = 40
var counter_age = 18
var height = document.getElementById('height')
var weight = document.getElementById('weightdisplay')
var age = document.getElementById('agedisplay')
var bttn_up_down_h = document.querySelectorAll('#height-control > button')
var bttn_up_down_w = document.querySelectorAll('#weightcontainer > button')
var bttn_up_down_a = document.querySelectorAll('#agecontainer > button')
height.innerText = counter_height + ' ft.'
weight.innerText = counter_weight + ' Kg.'
age.innerText = counter_age + ' Y.'

//Eventlistener for height
bttn_up_down_h.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    styles = e.currentTarget.classList
    checkvalidity(styles, 'h')
  })
})

//Eventlistener for weight
bttn_up_down_w.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    styles = e.currentTarget.classList
    checkvalidity(styles, 'w')
  })
})

//Eventlistener for age
bttn_up_down_a.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    styles = e.currentTarget.classList
    checkvalidity(styles, 'a')
  })
})

weight.addEventListener('click', function (e) {
  weight.classList.toggle('d-none')
  document.getElementById('weightinput').classList.toggle('d-none')
})
document.getElementById('weightinput').addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    weight.classList.toggle('d-none')
    document.getElementById('weightinput').classList.toggle('d-none')
    counter_weight = document.getElementById('weightinput').value
    weight.innerText = document.getElementById('weightinput').value + ' Kg.'
  }
})
age.addEventListener('click', function (e) {
  age.classList.toggle('d-none')
  document.getElementById('ageinput').classList.toggle('d-none')
})
document.getElementById('ageinput').addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    age.classList.toggle('d-none')
    document.getElementById('ageinput').classList.toggle('d-none')
    counter_age = document.getElementById('ageinput').value
    age.innerText = document.getElementById('ageinput').value + ' Kg.'
  }
})
document.querySelectorAll('.card1special').forEach(function (e) {
  e.addEventListener('click', function () {
    check_gender = e.children[1].textContent
    if (check_gender == 'Male') {
      bmr =
        88.362 +
        13.397 * counter_weight +
        4.799 * (counter_height * 30.48) -
        5.677 * counter_age
      document.getElementById('male').classList.toggle('border-info')
    } else {
      bmr =
        447.593 +
        9.247 * counter_weight +
        3.098 * (counter_height * 30.48) -
        4.33 * counter_age
      document.getElementById('female').classList.toggle('border-info')
    }
  })
})
document.querySelectorAll('.dropdown-item').forEach(function (e) {
  e.addEventListener('click', function () {
    check_text = e.textContent
    if (check_text == 'Not too much') {
      calc = bmr * 1.2
    } else if (check_text == 'Normal') {
      calc = bmr * 1.375
    } else {
      calc = bmr * 1.55
    }
  })
})
document.getElementById('offcanvas').addEventListener('click', function () {
  document.querySelectorAll(
    '.offcanvas-body span'
  )[0].textContent = calc.toPrecision(4)
})
