// script.js - Simple Portfolio Script
// 1. Project button - Show Alert
document.getElementById("project").onclick = function (e) {
    if (e.target.dataset.proj) {
        let box = document.getElementById("projectAlert");
        box.textContent = "You clicked: "+ e.target.dataset.proj + " correct";
        box.classList.remove("d-none");
        setTimeout(() => box.classList.add("d-none"), 3000); //makinginvisibe the alert box after 3 seconds
    }
};

//2. Contack Form - Send with Formspree
document.getElementById("contactForm").onsummit = function (e) {
    e.preventDefault(); //prevent the default form sumission behavior
    let form = this;

    //sendthe form from to formspree using fetch
    fetch(form.active, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
    })
       .then((res) => {
        if (res.ok) {
            // show sucess message if the response is successful
            document.getElementById("sentOk").classList.remove("d.none"); //making visible the success message
            form.reset(); //Reset the form after submission
        }else {
            //show failure message if there is an error with the submission
            document.getElementById("sentFail").classList.remove("d-none"); //making invisible the falure massage
        }
    })

    .catch(() => {
        //if there is am error in fetch request, show failure massage
        document.getElementById("sentFail").classList.remove(d-none); //making visible the failure massage
    });

};

const h = document.querySelector(".hero"),
b = document.querySelector(".navber-brand"),
t = () =>b.classList.toggle("hide", h.getBoundingClientRect().bottom > 60);
t();
addEventListener("scroll", t);

