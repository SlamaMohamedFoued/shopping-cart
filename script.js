let numberFirstProduct = 0
let numberSecondProduct = 0
let numberThirdProduct = 0

document.querySelector(".numberFirstProduct").innerText = numberFirstProduct;
document.querySelector(".numberSecondProduct").innerText = numberSecondProduct;
document.querySelector(".numberThirdProduct").innerText = numberThirdProduct;
document.querySelector("#total").textContent = 0

let firstProductPrice = document.querySelector(".firstProductPrice").innerText;
let secondProductPrice = document.querySelector(".secondProductPrice").innerText;
let thirdProductPrice = document.querySelector(".thirdProductPrice").innerText;

function incrementFirst(bool) {
    if (bool === true) {
        numberFirstProduct += 1;
        document.querySelector(".numberFirstProduct").innerText = numberFirstProduct;
        document.querySelector(".totalPriceItem1").innerText = firstProductPrice * numberFirstProduct;
    } else if (bool === false) {
        if (numberFirstProduct === 0) {
            document.querySelector(".totalPriceItem1").innerText = '0'
        } else {
            numberFirstProduct -= 1;
            document.querySelector(".numberFirstProduct").innerText = numberFirstProduct;
            document.querySelector(".totalPriceItem1").innerText = firstProductPrice * numberFirstProduct;
        }
    }

}

function incrementSecond(bool) {
    if (bool === true) {
        numberSecondProduct += 1;
        document.querySelector(".numberSecondProduct").innerText = numberSecondProduct;
        document.querySelector(".totalPriceItem2").innerText = document.querySelector(".secondProductPrice").innerText * numberSecondProduct;
    } else if (bool === false) {
        if (numberSecondProduct === 0) {
            document.querySelector(".totalPriceItem2").innerText = '0'
        } else {
            numberSecondProduct -= 1;
            document.querySelector(".numberSecondProduct").innerText = numberSecondProduct;
            document.querySelector(".totalPriceItem2").innerText = secondProductPrice * numberSecondProduct;
        }
    }
}

function incrementThird(bool) {
    if (bool === true) {
        numberThirdProduct += 1;
        document.querySelector(".numberThirdProduct").innerText = numberThirdProduct;
        document.querySelector(".totalPriceItem3").innerText = document.querySelector(".thirdProductPrice").innerText * numberThirdProduct;
    } else if (bool === false) {
        if (numberThirdProduct === 0) {
            document.querySelector(".totalPriceItem3").innerText = '0'
        } else {
            numberThirdProduct -= 1;
            document.querySelector(".numberThirdProduct").innerText = numberThirdProduct;
            document.querySelector(".totalPriceItem3").innerText = thirdProductPrice * numberThirdProduct;
        }
    }
}

function total() {
    document.querySelector("#total").textContent = numberFirstProduct * firstProductPrice + numberSecondProduct * secondProductPrice + numberThirdProduct * thirdProductPrice
}

function Like(heartClass) {
    document.querySelector(heartClass).style.color = "red";
}

function supprimer() {
    document.querySelector(".cardItem3").style.display = "none";
}