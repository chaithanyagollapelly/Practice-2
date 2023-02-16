let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Female"
};

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 77ab88fbab13f686d2bdd8476ab7c1ed587eb52719710ff28226738b343bf280"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users"

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsgEl.textContent = "Email already exists!!"
                }
            }
        });

}


let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});
let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});



let myFormEl = document.getElementById("myForm");


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormData(formData)
    //HTTP Server Request

})
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
})
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
})