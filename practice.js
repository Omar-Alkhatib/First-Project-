
const section = document.getElementById("page");
const inListDiv = document.getElementById("mainId")
const navSection = document.getElementById("nav-section")
section.appendChild(navSection);
const inputList = document.getElementById("inputList");
navSection.appendChild(inputList)



section.appendChild(inListDiv);




const unOrderedList = document.createElement("ul");
inListDiv.append(unOrderedList);

// const inventoryArray = ["Toyota Hilux 2018", "Nissan GTR 2017", "Ford Mustang 2019","Toyota Hilux 2019", "Nissan GTR 2015", "Ford Mustang 2020"];
const inventoryArray = [{serialNumber: "9EM3427829", manufacturer: "Toyota", model: "Supra", year: "1999", color: "Black", odometer: "20,000", generalCondition: "Good driving condition"},
{serialNumber: "4G09876", manufacturer: "Nissan", model: "GTR", year: "2014", color: "Red", odometer: "130,000", generalCondition: "Fair condition"},
{serialNumber: "17Lr67629", manufacturer: "Subaru", model: "WRX", year: "2012", color: "Gitan Blue", odometer: "11000", generalCondition: "A few body dents"},
{serialNumber: "56G98987", manufacturer: "Mitsubishi", model: "EVO-10", year: "2017", color: "Dark Grey", odometer: "87,000", generalCondition: "Very good condition"},
{serialNumber: "ERT0912408", manufacturer: "Nissan", model: "Z300", year: "2015", color: "Silver", odometer: "66,000", generalCondition: "Very good condition"},
{serialNumber: "56WRS98987", manufacturer: "Lexus", model: "LX-350", year: "2018", color: "White", odometer: "55,000", generalCondition: "Very good condition"}
];

const deleteListItem = function() {
    console.log(this.parentElement);
    unOrderedList.removeChild(this.parentElement)
}

const updateListItem = function () {
    let updatedItem = prompt("Enter here to update this inventory item then click OK");
    if ((updatedItem !== null) && (updatedItem !== "")) {
        
            console.log(this.parentElement);
            // addToList(updatedItem)
        let newListItem = document.createElement("li");
        // newListItem.innerText = updatedItem;
        let a = document.createElement('a');
        
        newListItem.appendChild(a);
        a.innerText = updatedItem
        a.href = "http://google.com";

        let newButton = document.createElement("button")
        newButton.innerText = "Delete"
        let updateButton = document.createElement("button")
        updateButton.innerText = "Update"
        newListItem.appendChild(newButton)
        newListItem.appendChild(updateButton)
        newButton.className = "manipulationButton";
        updateButton.className = "manipulationButton";
        newButton.addEventListener("click", deleteListItem)
        updateButton.addEventListener("click", updateListItem)
        unOrderedList.replaceChild(newListItem,this.parentElement)
      

    }
}

// const renderList = function(inventoryArray) {

//     for (let i = 0; i< inventoryArray.length; i++) {
//         let listItem = document.createElement("li");
//         // listItem.innerText = inventoryArray[i];
//         let a = document.createElement('a');

//         a.innerText = inventoryArray[i].getSummary();
//         a.href = "http://google.com";
//         listItem.append(a);

//         let newButton = document.createElement("button")
//         newButton.innerText = "Delete"
//         let updateButton = document.createElement("button")
//         updateButton.innerText = "Update"
//         listItem.appendChild(newButton)
//         listItem.appendChild(updateButton)
//         newButton.className = "manipulationButton";
//         updateButton.className = "manipulationButton";
//         newButton.addEventListener("click", deleteListItem)
//         updateButton.addEventListener("click", updateListItem)
//         unOrderedList.appendChild(listItem);
//     }
//         return unOrderedList;   
// };

// inListDiv.append(renderList(inventoryArray));



const addToList = function(inpObject) {
    
    // let inpValue = inputText.value;
    console.log(inpObject.getInformation())
    if (inpObject !== "") {
        // inventoryArray.push(inpValue); 
        let newListItem = document.createElement("li");
        // newListItem.innerText = inpValue;
        let a = document.createElement('a');
        
        a.innerText = inpObject.getSummary();
        a.href = "http://google.com";
        newListItem.appendChild(a);

        let newButton = document.createElement("button")
        newButton.innerText = "Delete"
        let updateButton = document.createElement("button")
        updateButton.innerText = "Update"
        newListItem.appendChild(newButton)
        newListItem.appendChild(updateButton)
        updateButton.removeAttribute("http://google.com")
        newButton.removeAttribute("http://google.com")
        newButton.className = "manipulationButton";
        updateButton.className = "manipulationButton";
        newButton.addEventListener("click", deleteListItem)
        updateButton.addEventListener("click", updateListItem)
        // body.append(renderList(inventoryArray.slice(inventoryArray.length-1)));
        unOrderedList.appendChild(newListItem);
        // unOrderedList.appendChild(inpValue);
    }
    
};





// const inputText = document.createElement("input");
// inListDiv.append(inputText);


// const button = document.createElement("button");
// button.innerText = "Add to inventory"
// inListDiv.append(button);





const createInventoryItem = function(serialNumber, manufacturer, model, year, color, odometer, generalCondition) {

    const vehicle = {};
  
    vehicle.vehIdenNumber = serialNumber
    vehicle.vehMake = manufacturer;
    vehicle.vehModel = model;
    vehicle.vehYear = year;
    vehicle.vehColor = color;
    vehicle.vehMilage = odometer;
    vehicle.vehCondition = generalCondition; 
  
    vehicle.changeColor = changeColor;
    vehicle.changeOdometer = changeOdometer;
    vehicle.changeYear = changeYear;
    vehicle.changeComments = changeComments;
    vehicle.getInformation = getInformation;
    vehicle.getSummary = getSummary;
  
    return vehicle;
  };
  
   
    const changeColor = function (newColor) {
            this.vehColor = newColor;
            return this.vehColor;
        }; 
    
    const changeOdometer = function(newOdometer){
            this.vehMilage = newOdometer;
            return this.vehMilage
        };
  
    const changeYear = function (newYear) {
            this.vehYear = newYear;
            return this.vehYear
        };
  
    const changeComments = function (newComment){
            this.vehCondition = newComment;
            return this.vehCondition
        };
        
    const getInformation = function(){
            return `VIN :                ${this.vehIdenNumber}
                    Manufacturer:        ${this.vehMake}
                    Model:               ${this.vehModel}
                    Year of Manufacture: ${this.vehYear}
                    Color:               ${this.vehColor}
                    Milage:              ${this.vehMilage}
                    General Condition:   ${this.vehCondition}`
        };
  
    const getSummary = function(){
          //  console.log(`${this.vehMake} ${this.vehModel} ${this.vehYear}`)
          return `${this.vehMake} ${this.vehModel} ${this.vehYear}`
        };
  
        // a function that creates the new vehicle object and adds it to the inventory array:
const CreateVehObj = function (serialNumber, manufacturer, model, year, color, odometer, generalCondition) {
    const newObject = createInventoryItem(serialNumber, manufacturer, model, year, color, odometer, generalCondition);
    inventoryArray.push(newObject);
    addToList(newObject);
    // inputList.removeChild();
   };

//    a function that renders the input screen for a new vehicle record:

const addVehicleInput = function () {
    
    let inputList = document.getElementById("inputList");    
    
    let input_1 = document.createElement("input");
    let listItem_1 = document.createElement("li");
    listItem_1.innerText = "VIN (Serial Number):";
    input_1.className = "inputSpec";

    let input_2 = document.createElement("input");
    let listItem_2 = document.createElement("li");
    listItem_2.innerText = "Manufacturer:";
    input_2.className = "inputSpec";

    let input_3 = document.createElement("input");
    let listItem_3 = document.createElement("li");
    listItem_3.innerText = "Model:";
    input_3.className = "inputSpec";

    let input_4 = document.createElement("input");
    let listItem_4 = document.createElement("li");
    listItem_4.innerText = "Year:"
    input_4.className = "inputSpec";

    let input_5 = document.createElement("input");
    let listItem_5 = document.createElement("li");
    listItem_5.innerText = "Color:"
    input_5.className = "inputSpec";

    let input_6 = document.createElement("input");
    let listItem_6 = document.createElement("li");
    listItem_6.innerText = "Odometer reading:"
    input_6.className = "inputSpec";

    let input_7 = document.createElement("input");
    let listItem_7 = document.createElement("li");
    listItem_7.innerText = "Condition:"
    input_7.className = "inputSpec";

    inputList.append(listItem_1);
    inputList.append(listItem_2);
    inputList.append(listItem_3);
    inputList.append(listItem_4);
    inputList.append(listItem_5);
    inputList.append(listItem_6);
    inputList.append(listItem_7);

    listItem_1.appendChild(input_1);
    listItem_2.appendChild(input_2);
    listItem_3.appendChild(input_3);
    listItem_4.appendChild(input_4);
    listItem_5.appendChild(input_5);
    listItem_6.appendChild(input_6);
    listItem_7.appendChild(input_7);
   
   
    let addBut = document.createElement("button");
    addBut.innerText = "ADD TO LIST";
    inputList.append(addBut);

    // let newVehicle = createInventoryItem(input_1.value, input_2.value, input_3.value, input_4.value, input_5.value, input_6.value, input_7.value)
    // inventoryArray.push(newVehicle);

    addBut.addEventListener("click", function(){CreateVehObj(input_1.value, input_2.value, input_3.value, input_4.value, input_5.value, input_6.value, input_7.value)})
    // addBut.addEventListener("click", function(){renderList(inventoryArray)});
}

addVehicleInput();

// button.addEventListener("click", addVehicle)

const createRenderObject = function (object){
const renderObject = createInventoryItem(object.serialNumber, object.manufacturer, object.model, object.year, object.color, object.odometer, object.generalCondition)
return renderObject;
};

const renderList = function(inventoryArray) {

    for (let i = 0; i< inventoryArray.length; i++) {
        let listItem = document.createElement("li");
        // listItem.innerText = inventoryArray[i];
        let a = document.createElement('a');

        a.innerText = createRenderObject(inventoryArray[i]).getSummary();
        a.href = "http://google.com";
        listItem.append(a);

        let newButton = document.createElement("button")
        newButton.innerText = "Delete"
        let updateButton = document.createElement("button")
        updateButton.innerText = "Update"
        listItem.appendChild(newButton)
        listItem.appendChild(updateButton)
        newButton.className = "manipulationButton";
        updateButton.className = "manipulationButton";
        newButton.addEventListener("click", deleteListItem)
        updateButton.addEventListener("click", updateListItem)
        unOrderedList.appendChild(listItem);
    }
        return unOrderedList;   
};

inListDiv.append(renderList(inventoryArray));
