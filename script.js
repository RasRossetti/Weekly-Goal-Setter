// Moon
const inputBoxMo = document.querySelector(".inputfieldMO input");
const addBtnMo = document.querySelector(".inputfieldMO button"); 
const todoListMo = document.querySelector(".todoListMO")
const deleteAllBtnMo = document.querySelector(".footerMO button")


inputBoxMo.onkeyup = () => {
    let userDataMo = inputBoxMo.value; 
    if(userDataMo.trim() != 0){ 
        addBtnMo.classList.add("active"); 
    } else{
        addBtnMo.classList.remove("active"); 
    } 
}

showTasksMo();


addBtnMo.onclick = () => {
    let userDataMo = inputBoxMo.value; 
    let getLocalStorageMo = localStorage.getItem("New TodoMO"); 
    if(getLocalStorageMo == null){ 
        listArrMo = []; 
    }else{
        listArrMo = JSON.parse(getLocalStorageMo);
    }
    listArrMo.push(userDataMo);
    localStorage.setItem("New TodoMO", JSON.stringify(listArrMo));
    showTasksMo();
}

function showTasksMo(){
    let getLocalStorageMo = localStorage.getItem("New TodoMO"); 
    if(getLocalStorageMo == null){ 
        listArrMo = []; 
    }else{
        listArrMo = JSON.parse(getLocalStorageMo);
    }
    const pendingNumbMo = document.querySelector(".pendingNumbMO");
    pendingNumbMo.textContent = listArrMo.length; 
    if(listArrMo.length > 0){
        deleteAllBtnMo.classList.add("active");
    }else{
        deleteAllBtnMo.classList.remove(".active");
    }
    let newLiTagMo = '';
    listArrMo.forEach((element, index) => {
        newLiTagMo += `<li> ${element} <span onclick="deleteTaskMo(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListMo.innerHTML = newLiTagMo; 
    inputBoxMo.value = "";
}


function deleteTaskMo(index){
    let getLocalStorageMo = localStorage.getItem("New TodoMO");
    listArrMo = JSON.parse(getLocalStorageMo); 
    listArrMo.splice(index, 1); 
    localStorage.setItem("New TodoMO", JSON.stringify(listArrMo)); 
    showTasksMo(); 
}

deleteAllBtnMo.onclick = ()=>{
    listArrMo = []; 
    localStorage.setItem("New TodoMO", JSON.stringify(listArrMo));
    showTasksMo();
} 

//Mars 
const inputBoxMa = document.querySelector(".inputfieldMA input");
const addBtnMa = document.querySelector(".inputfieldMA button"); 
const todoListMa = document.querySelector(".todoListMA")
const deleteAllBtnMa = document.querySelector(".footerMA button")


inputBoxMa.onkeyup = () => {
    let userDataMa = inputBoxMa.value; 
    if(userDataMa.trim() != 0){ 
        addBtnMa.classList.add("active"); 
    } else{
        addBtnMa.classList.remove("active"); 
    } 
}

showTasksMa();


addBtnMa.onclick = () => {
    let userDataMa = inputBoxMa.value; 
    let getLocalStorageMa = localStorage.getItem("New TodoMA"); 
    if(getLocalStorageMa == null){ 
        listArrMa = []; 
    }else{
        listArrMa = JSON.parse(getLocalStorageMa);
    }
    listArrMa.push(userDataMa);
    localStorage.setItem("New TodoMA", JSON.stringify(listArrMa));
    showTasksMa();
}

function showTasksMa(){
    let getLocalStorageMa = localStorage.getItem("New TodoMA"); 
    if(getLocalStorageMa == null){ 
        listArrMa = []; 
    }else{
        listArrMa = JSON.parse(getLocalStorageMa);
    }
    const pendingNumbMa = document.querySelector(".pendingNumbMA");
    pendingNumbMa.textContent = listArrMa.length; 
    if(listArrMa.length > 0){
        deleteAllBtnMa.classList.add("active");
    }else{
        deleteAllBtnMa.classList.remove(".active");
    }
    let newLiTagMa = '';
    listArrMa.forEach((element, index) => {
        newLiTagMa += `<li> ${element} <span onclick="deleteTaskMa(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListMa.innerHTML = newLiTagMa; 
    inputBoxMa.value = "";
}


function deleteTaskMa(index){
    let getLocalStorageMa = localStorage.getItem("New TodoMA");
    listArrMa = JSON.parse(getLocalStorageMa); 
    listArrMa.splice(index, 1); 
    localStorage.setItem("New TodoMA", JSON.stringify(listArrMa)); 
    showTasksMa(); 
}

deleteAllBtnMa.onclick = ()=>{
    listArrMa = []; 
    localStorage.setItem("New TodoMA", JSON.stringify(listArrMa));
    showTasksMa();
} 

//Me
const inputBoxMe = document.querySelector(".inputfieldME input");
const addBtnMe = document.querySelector(".inputfieldME button"); 
const todoListMe = document.querySelector(".todoListME")
const deleteAllBtnMe = document.querySelector(".footerME button")


inputBoxMe.onkeyup = () => {
    let userDateMe = inputBoxMe.value; 
    if(userDateMe.trim() != 0){ 
        addBtnMe.classList.add("active"); 
    } else{
        addBtnMe.classList.remove("active"); 
    } 
}

showTasksMe();


addBtnMe.onclick = () => {
    let userDateMe = inputBoxMe.value; 
    let getLocalStorageMe = localStorage.getItem("New TodoME"); 
    if(getLocalStorageMe == null){ 
        listArrMe = []; 
    }else{
        listArrMe = JSON.parse(getLocalStorageMe);
    }
    listArrMe.push(userDateMe);
    localStorage.setItem("New TodoME", JSON.stringify(listArrMe));
    showTasksMe();
}

function showTasksMe(){
    let getLocalStorageMe = localStorage.getItem("New TodoME"); 
    if(getLocalStorageMe == null){ 
        listArrMe = []; 
    }else{
        listArrMe = JSON.parse(getLocalStorageMe);
    }
    const pendingNumbMe = document.querySelector(".pendingNumbME");
    pendingNumbMe.textContent = listArrMe.length; 
    if(listArrMe.length > 0){
        deleteAllBtnMe.classList.add("active");
    }else{
        deleteAllBtnMe.classList.remove(".active");
    }
    let newLiTagMe = '';
    listArrMe.forEach((element, index) => {
        newLiTagMe += `<li> ${element} <span onclick="deleteTaskMe(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListMe.innerHTML = newLiTagMe; 
    inputBoxMe.value = "";
}


function deleteTaskMe(index){
    let getLocalStorageMe = localStorage.getItem("New TodoME");
    listArrMe = JSON.parse(getLocalStorageMe); 
    listArrMe.splice(index, 1); 
    localStorage.setItem("New TodoME", JSON.stringify(listArrMe)); 
    showTasksMe(); 
}

deleteAllBtnMe.onclick = ()=>{
    listArrMe = []; 
    localStorage.setItem("New TodoME", JSON.stringify(listArrMe));
    showTasksMe();
} 

//JU
const inputBoxJu = document.querySelector(".inputfieldJU input");
const addBtnJu = document.querySelector(".inputfieldJU button"); 
const todoListJu = document.querySelector(".todoListJU")
const deleteAllBtnJu = document.querySelector(".footerJU button")


inputBoxJu.onkeyup = () => {
    let userDateJu = inputBoxJu.value; 
    if(userDateJu.trim() != 0){ 
        addBtnJu.classList.add("active"); 
    } else{
        addBtnJu.classList.remove("active"); 
    } 
}

showTasksJu();

addBtnJu.onclick = () => {
    let userDateJu = inputBoxJu.value; 
    let getLocalStorageJu = localStorage.getItem("New TodoJU"); 
    if(getLocalStorageJu == null){ 
        listArrJu = []; 
    }else{
        listArrJu = JSON.parse(getLocalStorageJu);
    }
    listArrJu.push(userDateJu);
    localStorage.setItem("New TodoJU", JSON.stringify(listArrJu));
    showTasksJu();
}

function showTasksJu(){
    let getLocalStorageJu = localStorage.getItem("New TodoJU"); 
    if(getLocalStorageJu == null){ 
        listArrJu = []; 
    }else{
        listArrJu = JSON.parse(getLocalStorageJu);
    }
    const pendingNumbJu = document.querySelector(".pendingNumbJU");
    pendingNumbJu.textContent = listArrJu.length; 
    if(listArrJu.length > 0){
        deleteAllBtnJu.classList.add("active");
    }else{
        deleteAllBtnJu.classList.remove(".active");
    }
    let newLiTagJu = '';
    listArrJu.forEach((element, index) => {
        newLiTagJu += `<li> ${element} <span onclick="deleteTaskJu(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListJu.innerHTML = newLiTagJu; 
    inputBoxJu.value = "";
}

function deleteTaskJu(index){
    let getLocalStorageJu = localStorage.getItem("New TodoJU");
    listArrJu = JSON.parse(getLocalStorageJu); 
    listArrJu.splice(index, 1); 
    localStorage.setItem("New TodoJU", JSON.stringify(listArrJu)); 
    showTasksJu(); }

deleteAllBtnJu.onclick = ()=>{
    listArrJu = []; 
    localStorage.setItem("New TodoJU", JSON.stringify(listArrJu));
    showTasksJu();
} 



//VE
const inputBoxVe = document.querySelector(".inputfieldVE input");
const addBtnVe = document.querySelector(".inputfieldVE button"); 
const todoListVe = document.querySelector(".todoListVE")
const deleteAllBtnVe = document.querySelector(".footerVE button")


inputBoxVe.onkeyup = () => {
    let userDataVe = inputBoxVe.value; 
    if(userDataVe.trim() != 0){ 
        addBtnVe.classList.add("active"); 
    } else{
        addBtnVe.classList.remove("active"); 
    } 
}

showTasksVe();


addBtnVe.onclick = () => {
    let userDataVe = inputBoxVe.value; 
    let getLocalStorageVe = localStorage.getItem("New TodoVE"); 
    if(getLocalStorageVe == null){ 
        listArrVe = []; 
    }else{
        listArrVe = JSON.parse(getLocalStorageVe);
    }
    listArrVe.push(userDataVe);
    localStorage.setItem("New TodoVE", JSON.stringify(listArrVe));
    showTasksVe();
}

function showTasksVe(){
    let getLocalStorageVe = localStorage.getItem("New TodoVE"); 
    if(getLocalStorageVe == null){ 
        listArrVe = []; 
    }else{
        listArrVe = JSON.parse(getLocalStorageVe);
    }
    const pendingNumbVe = document.querySelector(".pendingNumbVE");
    pendingNumbVe.textContent = listArrVe.length; 
    if(listArrVe.length > 0){
        deleteAllBtnVe.classList.add("active");
    }else{
        deleteAllBtnVe.classList.remove(".active");
    }
    let newLiTagVe = '';
    listArrVe.forEach((element, index) => {
        newLiTagVe += `<li> ${element} <span onclick="deleteTaskVe(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListVe.innerHTML = newLiTagVe; 
    inputBoxVe.value = "";
}

function deleteTaskVe(index){
    let getLocalStorageVe = localStorage.getItem("New TodoVE");
    listArrVe = JSON.parse(getLocalStorageVe); 
    listArrVe.splice(index, 1); 
    localStorage.setItem("New TodoVE", JSON.stringify(listArrVe)); 
    showTasksVe(); //calling showTasksVe function
}

deleteAllBtnVe.onclick = ()=>{
    listArrVe = []; 
    localStorage.setItem("New TodoVE", JSON.stringify(listArrVe));
    showTasksVe();
} 

//SA
// getting all required elements 
const inputBoxSa = document.querySelector(".inputfieldSA input");
const addBtnSa = document.querySelector(".inputfieldSA button"); 
const todoListSa = document.querySelector(".todoListSA")
const deleteAllBtnSa = document.querySelector(".footerSA button")


inputBoxSa.onkeyup = () => {
    let userDataSa = inputBoxSa.value; //getting user entered value
    if(userDataSa.trim() != 0){ //if user values aren't only spaces
        addBtnSa.classList.add("active"); //active the add button
    } else{
        addBtnSa.classList.remove("active"); //unactive the add button
    } 
}

showTasksSa(); //calling show tasks 

// if user click on the add button 
addBtnSa.onclick = () => {
    let userDataSa = inputBoxSa.value; 
    let getLocalStorageSa = localStorage.getItem("New TodoSA"); //geting localstrge
    if(getLocalStorageSa == null){ //if localStorage is null
        listArrSa = []; 
    }else{
        listArrSa = JSON.parse(getLocalStorageSa);
    }
    listArrSa.push(userDataSa);
    localStorage.setItem("New TodoSA", JSON.stringify(listArrSa));
    showTasksSa(); //calling show tasks 
}
// function to add task list inside ul
function showTasksSa(){
    let getLocalStorageSa = localStorage.getItem("New TodoSA"); //geting localstrge
    if(getLocalStorageSa == null){ //if localStorage is null
        listArrSa = []; 
    }else{
        listArrSa = JSON.parse(getLocalStorageSa);
    }
    const pendingNumbSa = document.querySelector(".pendingNumbSA");
    pendingNumbSa.textContent = listArrSa.length; 
    if(listArrSa.length > 0){
        deleteAllBtnSa.classList.add("active");
    }else{
        deleteAllBtnSa.classList.remove(".active");
    }
    let newLiTagSa = '';
    listArrSa.forEach((element, index) => {
        newLiTagSa += `<li> ${element} <span onclick="deleteTaskSa(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListSa.innerHTML = newLiTagSa; //adding new li tag
    inputBoxSa.value = "";
}

//delete task funtion
function deleteTaskSa(index){
    let getLocalStorageSa = localStorage.getItem("New TodoSA");
    listArrSa = JSON.parse(getLocalStorageSa); 
    listArrSa.splice(index, 1); 
    localStorage.setItem("New TodoSA", JSON.stringify(listArrSA)); 
    showTasksSa(); 
}

//delete all tasks function 
deleteAllBtnSa.onclick = ()=>{
    listArrSa = []; //empty an array 
    localStorage.setItem("New TodoSA", JSON.stringify(listArrSa));
    showTasksSa();
} 

//SU
const inputBoxSu = document.querySelector(".inputfieldSU input");
const addBtnSu = document.querySelector(".inputfieldSU button"); 
const todoListSu = document.querySelector(".todoListSU")
const deleteAllBtnSu = document.querySelector(".footerSU button")


inputBoxSu.onkeyup = () => {
    let userDataSu = inputBoxSu.value; 
    if(userDataSu.trim() != 0){ 
        addBtnSu.classList.add("active"); 
    } else{
        addBtnSu.classList.remove("active"); 
    } 
}

showTasksSu();


addBtnSu.onclick = () => {
    let userDataSu = inputBoxSu.value; 
    let getLocalStorageSu = localStorage.getItem("New TodoSu"); 
    if(getLocalStorageSu == null){ 
        listArrSu = []; 
    }else{
        listArrSu = JSON.parse(getLocalStorageSu);
    }
    listArrSu.push(userDataSu);
    localStorage.setItem("New TodoSu", JSON.stringify(listArrSu));
    showTasksSu();
}

function showTasksSu(){
    let getLocalStorageSu = localStorage.getItem("New TodoSu"); 
    if(getLocalStorageSu == null){ 
        listArrSu = []; 
    }else{
        listArrSu = JSON.parse(getLocalStorageSu);
    }
    const pendingNumbSu = document.querySelector(".pendingNumbSU");
    pendingNumbSu.textContent = listArrSu.length; 
    if(listArrSu.length > 0){
        deleteAllBtnSu.classList.add("active");
    }else{
        deleteAllBtnSu.classList.remove(".active");
    }
    let newLiTagSu = '';
    listArrSu.forEach((element, index) => {
        newLiTagSu += `<li> ${element} <span onclick="deleteTaskSu(${index})";><i class="fas fa-check"></i></span></li>`;
    });
    todoListSu.innerHTML = newLiTagSu; 
    inputBoxSu.value = "";
}


function deleteTaskSu(index){
    let getLocalStorageSu = localStorage.getItem("New TodoSu");
    listArrSu = JSON.parse(getLocalStorageSu); 
    listArrSu.splice(index, 1); 
    localStorage.setItem("New TodoSu", JSON.stringify(listArrSu)); 
    showTasksSu(); //calling showTasksSu function
}

deleteAllBtnSu.onclick = ()=>{
    listArrSu = []; 
    localStorage.setItem("New TodoSu", JSON.stringify(listArrSu));
    showTasksSu();
} 