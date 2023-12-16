//Datos de Información
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Contenedor de Tareas
const tasksContainer = document.getElementById('tasksContainer');

//Función para setear las fechas

const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es' , { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es' , { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es' , { month: 'short' });
    dateYear.textContent = date.toLocaleString('es' , {year: 'numeric' });
}

//Función para añadir tareas

const addNewTask = event =>{
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
}

//Función para cambiar el estado de las tareas

const changeTaskState = event => {
    event.target.classList.toggle('done');
}

//Función para ordenar las tareas

const order = () =>{
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(i => {
        i.classList.contains('done') ? done.push(i) : toDo.push(i);
    })
    return[...toDo, ...done];
}

const renderOrderedTasks = () =>{
    order().forEach(i => tasksContainer.appendChild(i));
}
//Llamar la función
setDate();