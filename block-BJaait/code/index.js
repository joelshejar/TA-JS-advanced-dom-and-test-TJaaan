let input  = document.querySelector("input");
let span = document.querySelector("span");
let list = document.querySelector(".list-container")
let arr = JSON.parse(localStorage.getItem("arr")) || [];
let dragSrcEl = null;
function handleDragStart(event) {
    this.style.opacity = "0.4"
    dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    console.log(event.dataTransfer)
    event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver (e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop() {
    if(event.stopPropagation) {
        event.stopPropagation();
    }
    if(dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html')
    }
    return false;
}
function handleEnter(event) {
    event.target.classList.add("over");
    // console.log(event.target.classList);
}
function handleLeave(event){
    event.target.classList.remove("over");
    // console.log(event.target.classList);
}

function handleDragEnd(event) {
    this.style.opacity = "1";
    this.classList.remove("over");
    list.querySelectorAll("li").forEach(element => element.classList.remove("over"));
    // createUi(arr);
}


function createUi(arr = arr) {
    list.innerHTML = "";
    arr.forEach(element => {
        // <li class="list" draggable="true">loren</li>
        let li = document.createElement("li");
        li.setAttribute("draggable", true);
        li.classList.add("list");
        li.innerText = element;
        li.addEventListener("dragstart" , handleDragStart , false);
        li.addEventListener('dragenter' , handleEnter , false);
        li.addEventListener('dragover', handleDragOver, false);
        li.addEventListener("dragleave" , handleLeave, false);
        li.addEventListener("drop" , handleDrop, false);
        li.addEventListener("dragend", handleDragEnd, false);
        list.append(li);
        });
}

function addTodo(){
    if(input.value.length>0) {
        arr.push(input.value)
        input.value = "";
        createUi(arr);
        localStorage.setItem("arr" , JSON.stringify(arr));
    }
}
span.addEventListener("click" ,addTodo);

createUi(arr);




