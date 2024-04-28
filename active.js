// ------------------- / validateStep click / ------------------------------
let currentStep = 1;

function validateStep(step) {
  // if step is 1
  if (step === 1) {
    const input1 = document.querySelectorAll(".form-one [required]"); // get all required inputs
    let isValid = true;

    input1.forEach((input) => {
      if (!input.value.trim()) {
        // if input is empty
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError(); // show error
      return;
    }

    document.querySelector(".step2").classList.add("active"); // add active class to step 2

    // if step is 2
  } else if (step === 2) {
    const input2 = document.querySelectorAll(".form-two [required]"); //get all required inputs
    let isValid = true;

    // Checking all required fields
    input2.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError(); // show error
      return;
    }

    // if the list is empty
    const personList = document.getElementById("personList");
    if (personList.children.length === 0) {
      alert("The list is empty. Please add at least one item.");
      return;
    }

    document.querySelector(".step3").classList.add("active"); // إضافة الفئة النشطة إلى الخطوة 3

    // if step is 3
  } else if (step === 3) {
    const input3 = document.querySelectorAll(".form-three [required]");
    const pass = document.getElementById("password"); // get password input
    const conf_pass = document.getElementById("Confirm-Password"); // get confirm password input

    let isValid = true;

    input3.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError(); // show error
      return;
    } else if (pass.value != conf_pass.value) {
      // if password and confirm password are not equal
      errorPass(); // show error
      return;
    }

    document.querySelector(".step4").classList.add("active"); //add active class to step 4

    // if step is 4
  } else if (step === 4) {
    const input4 = document.querySelectorAll(".form-four [required]");
    let isValid = true;

    input4.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      ShowError(); // show error message
      return;
    }

    document.querySelector(".step5").classList.add("active"); // add active class to step 5
  } else if (step === 5) {
    // if step is 5

    success_message(); // show success message

    document.querySelector(".progres-steps").style.display = "none"; // hide progres bar
  }

  showStep(step + 1);
}
function showStep(step) {
  document.getElementById("step" + currentStep).style.display = "none"; // hide current step
  document.getElementById("step" + step).style.display = "block"; // show next step
  currentStep = step; // update current step
}

function prevStep() {
  showStep(currentStep - 1); // show previous step
}

// ------------------- / cancel order / ------------------------------
const del_order = document.querySelector(".cancel-order");
del_order.onclick = () => {
  setTimeout(() => {
    window.location.reload(); // reload page
  }, 500);
};

// ----------------------- / Repeater /----------------------

const personList = document.getElementById("personList");
const listItemsArray = []; // array to store list items

function addToList(itemName, numberItem) {
  // check if empty
  if (itemName.trim() === "" || numberItem.trim() === "") {
    alert("Please enter the name of the piece and the number of pieces");
    return;
  }

  // add to list
  const listItemHTML = `
        <li>
            ${numberItem} : ${itemName}
        </li>
    `;

  // <button class="delete-button" onclick="deletePerson(this.parentNode)">
  //  <img src="img/delete.png" alt="Delete">
  //</button>

  if (!updateType_model()) {
    return;
  } else {
    listItemsArray.push(listItemHTML); // add to array

    personList.insertAdjacentHTML("beforeend", listItemHTML); //add to list
  }
}

// OnClick add item
function addToItemList() {
  const itemName = document.getElementById("itemName").value;
  const numberItem = document.getElementById("numberItem").value;
  addToList(itemName, numberItem);

  item_name.value = "";
  number_Item.value = "";
}

// rempve item
function deletePerson(listItem) {
  listItem.remove();
  const index = listItemsArray.indexOf(listItem.outerHTML);
  if (index !== -1) {
    listItemsArray.splice(index, 1);
  }
}

// -------- update number item --------

function updateType_model() {
  let isValid = true;

  if (type_model.value === "Companies") {
    number_Item.min = 10;

    // Check if the value is less than 10
    if (number_Item.value < 10) {
      alert("The minimum number should be at least 10");
      isValid = false;
    }
  } else if (type_model.value === "Singles") {
    number_Item.min = 1;

    // Check if the value is less than 1
    if (number_Item.value < 1) {
      alert("The minimum number should be at least 1");
      isValid = false;
    }
  }

  return isValid;
}

// ----------------------- / update_Serial_Number ==> Car Serial Number /----------------------
function update_Serial_Number() {
  if (type_model.value === "Companies") {
    serial_number.setAttribute("required", ""); // add required attribute
  } else if (type_model.value === "Singles") {
    serial_number.removeAttribute("required"); // remove required attribute
  }
}

type_model.addEventListener("change", update_Serial_Number);

update_Serial_Number();

// ----------------------- / update_Serial_body ==> Car body number /----------------------

function update_Serial_body() {
  if (type_model.value === "Companies") {
    body_number.removeAttribute("required"); // remove required attribute
  } else if (type_model.value === "Singles") {
    body_number.setAttribute("required", ""); // add required attribute
  }
}

type_model.addEventListener("change", update_Serial_body);

update_Serial_body();

// ------------------- / Show Error Snackbar / ------------------------------
// show the error required
function ShowError() {
  let snack = document.getElementById("ShowError");
  snack.className = "show";
  setTimeout(() => {
    snack.className = snack.className.replace("show", ""); // remove the show class to allow the user to see the error
  }, 3000);
}

// show the error password
function errorPass() {
  let snack = document.getElementById("errorPass");
  snack.className = "show";
  setTimeout(() => {
    snack.className = snack.className.replace("show", ""); // remove the show class to allow the user to see the error
  }, 3000);
}

// show success message
function success_message() {
  let snack = document.getElementById("Success");
  snack.className = "show";
  setTimeout(() => {
    snack.className = snack.className.replace("show", "");
  }, 3000);
}

// -------------------- update Image -----------------------------------

function updateImage() {
  // update the image of the car
  const selectItem = document.getElementById("carMaker");
  const outBotFirst = document.querySelector(".outBot-form-one");

  switch (
    selectItem.value // switch case to update the image
  ) {
    case "bmw":
      outBotFirst.src = "img/bmw.jpg";
      break;
    case "mercedes":
      outBotFirst.src = "img/mercedes.jpg";
      break;
    case "kia":
      outBotFirst.src = "img/kia.jpg";
      break;
    case "toyota":
      outBotFirst.src = "img/toyota.jpg";
      break;
    case "mg":
      outBotFirst.src = "img/mg.jpg";
      break;
    case "hyundai":
      outBotFirst.src = "img/hyundai.jpg";
      break;
    default:
      outBotFirst.src = "";
  }
}

document.getElementById("carMaker").addEventListener("change", updateImage);

updateImage(); // call the function to update the image

// -------------------- / Upload view Images/ -----------------------------------
const Photos_piece = document.getElementById("Photos_piece");

Photos_piece.onchange = function () {
  const files = this.files;
  const view_upload = document.getElementById("viewUpload");

  while (view_upload.firstChild) {
    // remove all childs
    view_upload.removeChild(view_upload.firstChild);
  }

  for (const file of files) {
    // loop through the files
    const reader = new FileReader(); // create a reader

    reader.onload = function (event) {
      // when the reader is loaded
      const img = document.createElement("img"); // create an image

      img.src = event.target.result; // set the source to the image
      img.style.maxWidth = "150px";
      img.style.maxHeight = "150px";
      view_upload.appendChild(img); // add the image to the view
    };

    reader.readAsDataURL(file); // read the file
  }
};
