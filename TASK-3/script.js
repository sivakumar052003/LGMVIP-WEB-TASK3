function setError(id, error) {
    const element = document.getElementById(id);
    element.getElementsByClassName("error-container")[0].innerHTML = error;
  }
  
  function clearErrors() {
    const errors = document.getElementsByClassName("error-container");
    for (const item of errors) {
      item.innerHTML = "";
    }
  }
  
  function validateForm(event) {
    event.preventDefault();
    let returnval = true;
    clearErrors();
    var name = document.forms["myForm"]["fname"].value;
  
    const email = document.forms["myForm"]["femail"].value;
  
    const phone = document.forms["myForm"]["fphone"].value;
    if (!/^\d+$/.test(phone)) {
      setError("phone", "*Enter numeric value only");
      returnval = false;
    } else if (phone.length !== 10) {
      setError("phone", "*Phone number must be 10 digits");
      returnval = false;
    }
  
    const password = document.forms["myForm"]["fpassword"].value;
    if (password.length < 6) {
      setError("password", "*Password must be at least 6 characters long.");
      returnval = false;
    }
  
    const conpassword = document.forms["myForm"]["fconpassword"].value;
    if (conpassword !== password) {
      setError("con-password", "*Passwords do not match");
      returnval = false;
    }
  
    if (returnval) {
      displayFormData();
      clearFormFields();
    }
  
    return returnval;
  }
  
  function displayFormData() {
    const name = document.forms["myForm"]["fname"].value;
    const email = document.forms["myForm"]["femail"].value;
    const phone = document.forms["myForm"]["fphone"].value;
    const website = document.forms["myForm"]["fwebsite"].value;
    const image = document.forms["myForm"]["fimage"].value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const skills = Array.from(
      document.querySelectorAll('input[name="skills"]:checked')
    ).map((checkbox) => checkbox.value);
    const password = document.forms["myForm"]["fpassword"].value;
  
    const studentContainer = document.createElement("div");
    studentContainer.classList.add("student-container");
  
    studentContainer.innerHTML = `
      <img src="${image}">
      <div class="student-info">
      <p class="output-name">${name}</p>
      <p>${gender}</p>
      <p>${email}</p>
      <p><a href="${website}" target="_blank">${website}</a></p>
      <p>${skills.join(", ")}</p>
      <p>${phone}</p>
    </div>
    `;
  
    const displayDataDiv = document.getElementById("displayData");
    displayDataDiv.appendChild(studentContainer);
  
   
    const mainContainer = document.getElementById("main");
    mainContainer.style.width = `${(displayDataDiv.children.length + 1) * 50}%`;
  }
  
  const form = document.getElementById("form");
  form.addEventListener("submit", validateForm);
  
  function clearFormFields() {
    const form = document.forms["myForm"];
    form.reset(); 
    clearErrors(); 
  }
  
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", clearFormFields);