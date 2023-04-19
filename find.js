let answer = document.querySelector(".answer")

function sum_argham(pinArr) {
    let sum = 0;
    for(let k in pinArr){
        sum += pinArr[k]
    }
    return sum
}

function pin_is_ok(pinArr) {
    if (
      pinArr["panj"] + pinArr["se"] == 14 &&
      pinArr["yek"] == pinArr["do"] * 2 - 1 &&
      pinArr["chahar"] == pinArr["do"] + 1 &&
      pinArr["do"] + pinArr["se"] == 10
    ) {
      if (sum_argham(pinArr) == 30) {
        return true;
      }
    }
}

for(let pin = 0; pin<100000;pin++){
    let this_pin = String(pin)
    
    let pinArr = {}
    pinArr["yek"] = Number(this_pin[0])
    pinArr["do"] = Number(this_pin[1])
    pinArr["se"] = Number(this_pin[2])
    pinArr["chahar"] = Number(this_pin[3])
    pinArr["panj"] = Number(this_pin[4])

    if (pin_is_ok(pinArr)) {
        answer.innerHTML = pin
    }
}