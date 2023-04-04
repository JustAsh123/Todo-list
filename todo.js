//Model

let Todos;

const savedTodos = JSON.parse(localStorage.getItem('todos'));

if (Array.isArray(savedTodos)){
    Todos=savedTodos;
}else{
    Todos=[{title:"Test",date:"2023-12-06",time:"ee",id:"id1"}];
}

//Create a todo

function createTodo(title,date,time){
    Todos.push({
        title:title,
        date:date,
        time:time,
        id: ''+new Date().getTime()
    });
    saveList();
}

//Delete a todo

function removeTodo(del_id){
    Todos = Todos.filter(function (todo){
        if (todo.id === del_id){
            return false;
        } else {
            return true;
        }
    });
    saveList();
}

function saveList(){
    localStorage.setItem('todos',JSON.stringify(Todos));
}

render();

//View

function render(){
    document.getElementById("todo-list").innerHTML = "";
    Todos.forEach(function (todo){
        if (todo.title !="Test"){
            const title = todo.title;
            const date = todo.date;
            const time = todo.time;

            let del_button = document.createElement("Button");
            del_button.id = todo.id;
            del_button.className = "del_but";
            del_button.innerText= "Delete";
            del_button.onclick = del_func;

            let Task = document.createElement("div");
            Task.className = "task";
            Task.innerHTML = title + " || "  + date+ " || "+time;
            Task.appendChild(del_button);
            
            document.getElementById("todo-list").appendChild(Task)
        }
    })
}

//Control

function add_task(){
    const title = document.getElementById("todo-title").value
    const date = document.getElementById("date-picker").value
    const time = document.getElementById("time-picker").value
    createTodo(title,date,time);
    render();
}

function del_func(event){
    let del_but = event.target;
    let del_id = del_but.id;
    removeTodo(del_id);
    render();
}