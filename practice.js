const body = document.querySelector("body");
// let headerDiv = document.querySelector("div")
// body.append(headerDiv);
// headerDiv.className = "container";
const header = document.createElement("h1");
header.innerText="Inventory";
// headerDiv.append(header);

body.append(header);

const unOrderedList = document.createElement("ul");
body.append(unOrderedList);

const inventoryArray = ["Toyota Hilux 2019", "Nissan GTR 2015", "Ford Mustang 2020"];

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

const renderList = function(inventoryArray) {

    for (let i = 0; i< inventoryArray.length; i++) {
        let listItem = document.createElement("li");
        // listItem.innerText = inventoryArray[i];
        let a = document.createElement('a');

        a.innerText = inventoryArray[i];
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

body.append(renderList(inventoryArray));



const addToList = function(inpValue) {
    
    // let inpValue = inputText.value;
    console.log(inpValue)
    if (inpValue !== "") {
        // inventoryArray.push(inpValue); 
        let newListItem = document.createElement("li");
        // newListItem.innerText = inpValue;
        let a = document.createElement('a');
        
        a.innerText = inpValue;
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





const inputText = document.createElement("input");
body.append(inputText);


const button = document.createElement("button");
button.innerText = "Add to inventory"
body.append(button);

button.addEventListener("click", function () {addToList(inputText.value)})



