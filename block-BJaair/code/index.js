let inputForm  = document.querySelector(".input");
let selectBox = document.querySelector("select");
let boardContainer = document.querySelector(".add-notice-board");

class Todo{
    constructor(text, title) {
        this.text = text;
        this.title = title;
    }
    createUi() {
        console.log(this.text)
        let div = document.createElement("div");
        div.classList.add("board");
        let input  = document.createElement("input");
        input.classList.add("display-none")
        let div2 = document.createElement("div");
        div2.classList = "flex justify-center align-center flex-column"
        let span  = document.createElement("span");
        span.classList.add("text");
        console.log(this.text)
        span.innerText = this.text;
        let h1 = document.createElement("h1");
        h1.innerText = this.title;
        div.addEventListener("dblclick" , (event) => {
            h1.classList.add("display-none");
            input.classList.remove("display-none");
            input.addEventListener("blur" , (event) => {
                this.title = event.target.value;
                h1.innerText = this.title
                h1.classList.remove("display-none");
                input.classList.add("display-none");
            })
            return this.title
        })
        div2.append(input, h1)
        div.append(span, div2);
        return div;
    }
}

class Todos{
    constructor(arr=[]) {
        this.arr = JSON.parse(localStorage.getItem("arr")) || [] ;
        console.log(this.arr);
    }
    add(text, title){
        let todo = new Todo(text, title);
        console.log(todo.text);
        this.arr.push(todo);
        localStorage.setItem("arr" , JSON.stringify(this.arr));
    }
    createUiOfTodos(arr = this.arr) {
        boardContainer.innerHTML = "";
        console.log(this.arr);
        arr.forEach(element => boardContainer.append(Todo.prototype.createUi.call(element)))
    }
}


let todos = new Todos();

let inputValue ;
inputForm.addEventListener("blur" , (event)=> {
    inputValue = event.target.value
})

selectBox.addEventListener("blur", (event)=> {
    let selectvalue  = event.target.value;
    todos.add(selectvalue, inputValue);
    todos.createUiOfTodos();
})

todos.createUiOfTodos();