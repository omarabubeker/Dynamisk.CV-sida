//DARK LIGHT FUNCTION!!

const modeSwitch = document.getElementById('dark-switch');
const text  = document.getElementById('d-switch');

// const moon = document.querySelector("fa-moon");
// const sun = document.querySelector("fa-sun");


modeSwitch.addEventListener('click', () => {


    if (modeSwitch.checked) {
        console.log('hejhej')
        darkModeOn()
        text.innerHTML = "lightmode"

    }

    else {
        console.log('omar')
        darkModeOff()
        text.innerHTML = "darkmode"
    }
})

function darkModeOn () {
    document.body.classList.add("dark-mode")
}

function darkModeOff () {
    document.body.classList.remove("dark-mode")
}




