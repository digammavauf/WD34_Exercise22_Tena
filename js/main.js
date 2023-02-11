let element = document.querySelector("#sampleHeading");
let modal = document.querySelector("#modal-sample");
let list = document.querySelector("#sampleList");
let dos = document.querySelector("#dos");

function changeColor() {
    element.style.backgroundColor="red";
}

function triggerModal() {
    modal.style.display = "flex";
}

//alert(list.firstElementChild.innerHTML);
//alert(list.lastElementChild.innerHTML);
//alert(dos.nextElementSibling.innerHTML);
//alert(dos.previousElementSibling.innerHTML);
//alert(list.childElementCount);

let division = document.querySelector("#divisionSample");
let removebtn = document.querySelector("#remove-button");
removebtn.addEventListener("click", removeSampleElement);
function createSampleElement() {
    let createH1 = document.createElement("h1");
    createH1.innerHTML = "Sample Element";
    //createH1.textContent = "Sample Text"
    createH1.className = "SampleClass";
    //division.insertBefore(createH1, division.firstElementChild);
    //division.insertBefore(createH1, division.lastElementChild);
    division.appendChild(createH1);
}

function removeSampleElement() {
    //division.removeChild(division.firstElementChild);
    division.removeChild(division.lastElementChild);
}

let addTaskBtn = document.querySelector("#add-task");
addTaskBtn.addEventListener("click", addTask);
let removeTaskBtn = document.querySelector("#remove-task");
removeTaskBtn.addEventListener("click", removeTask);
let div = document.querySelector("#listOfTask");

function addTask() {
    let task = document.querySelector("#task").value;
    let taskItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "Remove Me";
    button.addEventListener("click", removeSpecificItem);
    taskItem.innerHTML = task;
    taskItem.appendChild(button);
    div.appendChild(taskItem);
}

function removeTask() {
    div.removeChild(div.lastElementChild);
}

function removeSpecificItem(event) {
    event.target.parentNode.remove();
}

let listNew = document.querySelector("#listSampleNew");
let newElementReplace = document.createElement("li");
newElementReplace.innerHTML = "One";
listNew.replaceChild(newElementReplace, listNew.lastElementChild);

let cloneList = listNew.cloneNode(true);
document.body.appendChild(cloneList);

let button1 = document.querySelector("#attribute-1");
let button2 = document.querySelector("#attribute-2");

button1.addEventListener('click', disableMe);
button2.addEventListener('click', unDisable);

function disableMe() {
    button1.setAttribute("disabled",'');
}

function unDisable() {
    button1.removeAttribute("disabled",'');
}

let attribValue = button2.getAttribute("movie");
//alert(attribValue);

let button3 = document.querySelector("#button-3");
let button4 = document.querySelector("#button-4");
let sampleDivision = document.querySelector("#divNoClass");

button3.addEventListener("click", addingClasses);
button4.addEventListener("click", removingClasses);

function addingClasses() {
    sampleDivision.classList.add("addedClass", "roundedEdges");
}

function removingClasses() {
    sampleDivision.classList.remove("addedClass", "roundedEdges");
}

// BEGIN LONG VERSION
/*
let tab1 = document.querySelector("#tab-1");
let tab2 = document.querySelector("#tab-2");
let tab3 = document.querySelector("#tab-3");

let div1 = document.querySelector("#div-1");
let div2 = document.querySelector("#div-2");
let div3 = document.querySelector("#div-3");

tab1.addEventListener("click", showTab1);
tab2.addEventListener("click", showTab2);
tab3.addEventListener("click", showTab3);

function showTab1() {
    div1.classList.add("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
    tab1.setAttribute("disabled", "");
    tab2.removeAttribute("disabled")
    tab3.removeAttribute("disabled")
}

function showTab2() {
    div2.classList.add("active");
    div1.classList.remove("active");
    div3.classList.remove("active");
    tab2.setAttribute("disabled", "");
    tab1.removeAttribute("disabled")
    tab3.removeAttribute("disabled")
}

function showTab3() {
    div3.classList.add("active");
    div2.classList.remove("active");
    div1.classList.remove("active");
    tab3.setAttribute("disabled", "");
    tab2.removeAttribute("disabled")
    tab1.removeAttribute("disabled")
}
*/
// END LONG VERSION

// BEGIN SHORT VERSION

document.querySelectorAll(".button").forEach(function(button){
    button.addEventListener("click", function(event){
        let id = event.target.id.slice(4,5);
        let buttons = document.querySelectorAll(".button");
        let divis = document.querySelectorAll(".divi");
        buttons.forEach(function(button) {
            if(button.id.slice(4,5)==id)
                button.setAttribute("disabled", "");
            else
                button.removeAttribute("disabled");
        });
        divis.forEach(function(divi) {
            if(divi.id.slice(4,5)==id)
                divi.classList.add("active");
            else
                divi.classList.remove("active");
        });
    });
});

//END SHORT VERSION

let sampleArray = [0, 1, 2, 3, 4, 5];

sampleArray.forEach(function(arrayItem){
    console.log(arrayItem);
});

for (let arrayItem of sampleArray) {
    console.log(arrayItem);
}

function showStudents(...names) {
    for(let student of names) {
        console.log(student);
    }
}

showStudents("Tena", "Lapuz", "Castro");

function getSum(...numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    console.log(sum);
}

getSum(1, 2, 3, 4, 5, 15, 30, 60, 120);

let setA = ["a", "b", "c"];
let setB = ["d", "e", "f"];
let allSets = [...setA, ...setB];

for(let student of allSets) {
    console.log(student);
}

let who = "Tena";
let templateLiteral = `this
is a
message
from ${who}`;
console.log(templateLiteral);