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
            del_button.className = "button";
            del_button.innerText= "Done";
            del_button.onclick = del_func;

            let task_details = document.createElement("div");
            task_details.className = "task-details";

            let task_title = document.createElement("p");
            task_title.className = "task-title";
            task_title.innerHTML = title;

            let date_time= document.createElement("p");
            date_time.className = "date-time";
            date_time.innerHTML = date+"<br>"+time;

            task_details.appendChild(task_title);
            task_details.appendChild(date_time);
            
            let but_cont = document.createElement("div");
            but_cont.className = "button-container";
            but_cont.appendChild(del_button);

            let Task = document.createElement("div");
            Task.className = "task-container";
            Task.appendChild(task_details);
            Task.appendChild(but_cont);
            //Task.innerHTML = title + " || "  + date+ " || "+time;
            //Task.appendChild(del_button);
            
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


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
