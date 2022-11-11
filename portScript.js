//MODALONE

const modal = document.querySelector(".jsmodal")

const openbutton = document.querySelector(".mdl-open")

const closebutton = document.querySelector(".mdl-close")

openbutton.onclick = function () {
    modal.style.display = "block"
}

closebutton.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

//MODALTWO


const modalNum = document.querySelector(".jsNumModal")

const openbuttonNum = document.querySelector(".mdlNum-open")

const closebuttonNum = document.querySelector(".mdlNum-close")

openbuttonNum.onclick = function () {
    modalNum.style.display = "block"
}

closebuttonNum.onclick = function () {
    modalNum.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modalNum) {
        modalNum.style.display = "none"
    }
}
