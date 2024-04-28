// ------------------ /  Inputs  / ----------------------

// -------- Form One -----------
const type_model = document.getElementById("typeModel");
const car_maker = document.getElementById("carMaker");
const car_model = document.getElementById("carModel");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
// -------- Form Two -----------
const item_name = document.getElementById("itemName");
const number_Item = document.getElementById("numberItem");
const serial_number = document.getElementById("serialNumber");
const body_number = document.getElementById("Car_body_number");
const Plot_Descr = document.getElementById("Plot_Description");
// -------- Form three -----------
const email = document.getElementById("email");
const phone_number = document.getElementById("phone-number");
const country_phone = document.getElementById("country-phone");
const country_code = document.getElementById("country-code");
// -------- Form four -----------
const type_shipment = document.getElementById("Type-shipment");
const fool_name = document.getElementById("name");
const country = document.getElementById("country");
const city = document.getElementById("City");
const neighborhood = document.getElementById("Neighborhood");
const box_number = document.getElementById("Box-number");
const address_description = document.getElementById("housing-address");

// ------------------ /  Inputs  / ----------------------

// -------- Invoice Array of Object -----------
let invoice = [];

let isDataAdded = false;

submit.onclick = () => {
  validateStep(4);

  let newInvoice = {
    // -------- Form One -----------
    type_model: type_model.value,
    car_maker: car_maker.value,
    car_model: car_model.value,
    year: year.value,
    // -------- Form Two -----------
    item_name: item_name.value,
    number_Item: number_Item.value,
    serial_number: serial_number.value,
    body_number: body_number.value,
    Plot_Descr: Plot_Descr.value,
    // -------- Form three -----------
    email: email.value,
    phone_number: phone_number.value,
    country_phone: country_phone.value,
    country_code: country_code.value,
    // -------- Form four -----------
    type_shipment: type_shipment.value,
    fool_name: fool_name.value,
    country: country.value,
    city: city.value,
    neighborhood: neighborhood.value,
    box_number: box_number.value,
    address_description: address_description.value,
    // -------- length -----------
    length: invoice.length + 1,
  };

  if (!isDataAdded) {
    invoice.push(newInvoice); //Add Data Invoice Array of Object

    // -------- Invoice Array of Object -----------
    const show = invoice.map((e) => {
      return `
    <div class="logo"><a href=""><span>.Web</span>Form</a></div>
    <div class="information row p-0 m-0">
        <div dir="ltr" class="col-6 p-0 m-0">
            <h5> ${e.country} , ${e.city} , ${e.neighborhood} , ${
        e.body_number
      } </h5>
            <p>
                ${e.address_description}
            </p>
        </div>
        <div dir="rtl" class="col-6 p-0 m-0">
            <h5> ${e.fool_name}</h5>
            <h5> ${e.email}</h5>
            <h5> ${e.country_code}  ${e.phone_number}</h5>
        </div>
    </div>
    <hr>

    <div class="">
        <table id="customers">
            <tr>
            <th>ID</th>
            <th>Number Items & Name Item </th>
                <th>Shipping Type</th>
                <th>serial number of item</th>
                <th>Chassis number</th>
            </tr>
            <tr>

            <td>${e.length}</td>
            <td>
            ${
              // Map Array of Object
              listItemsArray
                .map((x) => {
                  return `
                    ${x}
                    `;
                })
                .join("")
            }
            </td>
                <td>${e.type_shipment}</td>
                <td>${e.serial_number}</td>
                <td>${e.body_number}</td>
            </tr>
        </table>
    </div>
    `;
    });

    document.getElementById("show").innerHTML = show;
    // -------- Invoice Array of Object -----------

    isDataAdded = true;
  } else if (isDataAdded === true) {
    // If Data Added

    // -------- Invoice Array of Object -----------

    invoice = []; // Empty Invoice Array of Object

    invoice.push(newInvoice); //Add Data Invoice Array of Object

    // -------- Invoice Array of Object -----------
    const show = invoice.map((e) => {
      // Show Data Invoice Array of Object
      return `
    <div class="logo"><a href=""><span>.Web</span>Form</a></div>
    <div class="information row p-0 m-0">
        <div dir="ltr" class="col-6 p-0 m-0">
            <h5> ${e.country} , ${e.city} , ${e.neighborhood} , ${e.body_number} </h5>
            <p>
                ${e.address_description}
            </p>
        </div>
        <div dir="rtl" class="col-6 p-0 m-0">
            <h5> ${e.fool_name}</h5>
            <h5> ${e.email}</h5>
            <h5> ${e.country_code}  ${e.phone_number}</h5>
        </div>
    </div>
    <hr>

    <div class="">
        <table id="customers">
            <tr>
                <th>Number of Items </th>
                <th>Name Item</th>
                <th>Shipping Type</th>
                <th>serial number of item</th>
                <th>Chassis number</th>
            </tr>
            <tr>
                <td>${e.number_Item} </td>
                <td>${e.item_name}</td>
                <td>${e.type_shipment}</td>
                <td>${e.serial_number}</td>
                <td>${e.body_number}</td>
            </tr>
        </table>
    </div>
    `;
    });

    document.getElementById("show").innerHTML = show; // Show Data in HTML

    // ---------------------
    isDataAdded = true; // Data Added
  }
};
