let tasks = [];

// Load tasks from localStorage when the page loads
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
        }
        viewTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function show(){
    document.querySelector('.add').style.display='block';
    document.querySelector('#taskList').style.display='none';
}

function addTasks(){
    const title = document.querySelector('#title').value;
    const deadline = document.querySelector('#deadline').value;
    const description = document.querySelector('#desp').value;

    if(title && deadline){
        tasks.push({title,deadline,description});
        saveTasks();
        document.querySelector('.add').style.display='none';
        document.querySelector('#title').value='';
        document.querySelector('#deadline').value='';
        document.querySelector('#desp').value='';
    }else{
        window.alert("Please Enter Title and deadline!");
    }
}

function removeTask(index){
    tasks.splice(index,1);
    saveTasks();
    viewTasks();
}

function remove(){
    tasks = [];
    saveTasks();
    viewTasks();99
}



function viewTasks() {
    document.querySelector('.add').style.display='none';
    document.querySelector('#taskList').style.display='block';
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        const noTasksDiv = document.createElement('div');
        noTasksDiv.className = 'no-tasks';
        noTasksDiv.innerHTML = '<p>No Tasks Here !</p>';
        taskList.appendChild(noTasksDiv);
    }else{
        
        tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
        <p><strong>Title:</strong>${task.title}</p>
        <p><strong>Deadline:</strong> ${task.deadline}</p>
        <p><strong>Description:</strong> ${task.description || 'No description'}</p>
        <button onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });

    }
    
}


window.onload =loadTasks();











 