function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    if (taskTitle === '') {
        alert('Please enter a task title');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskTitle;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.onclick = function() {
        li.classList.toggle('completed');
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById('taskTitle').value = '';
}
