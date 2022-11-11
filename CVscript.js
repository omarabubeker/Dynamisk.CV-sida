let url = "./data.json"


async function getSomething() {

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();


        let work = data.WorkLifeExperience;


        let education = data.Education;


        let other = data.Other;




        const workEl = document.createElement("ul")
        workEl.classList.add("cv-ul")

        let section = document.querySelector(".cv-section")
        section.appendChild(workEl)





        for (let i = 0; i < work.length; i++) {

            let workElTwo = document.createElement("li")
            workElTwo.classList.add("cv-ul")

            workEl.appendChild(workElTwo)

            workElTwo.innerHTML = work[i].title




        }



        const educationEl = document.createElement("ul")
        educationEl.classList.add("cv-ul")

        let sectiontwo = document.querySelector(".cvsectwo")
        sectiontwo.appendChild(educationEl)



        for (let i =0; i < education.length; i++) {

            let educationLi = document.createElement("li")
            educationLi.classList.add("cv-ul")
            
            educationEl.appendChild(educationLi)

            educationLi.innerHTML = education[i].school
        }


        let otherUl = document.createElement("ul")
        otherUl.classList.add("cv-ul")

        let sectionthree = document.querySelector(".cvsecthree")

        sectionthree.appendChild(otherUl)
        
        for (let i = 0; i < other.length; i++) {

            let otherLi = document.createElement("li")
            otherLi.classList.add("cv-ul")

            otherUl.appendChild(otherLi)

            otherLi.innerHTML = other[i].otherthings



        }

        console.log(sectionthree)





    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getSomething();
