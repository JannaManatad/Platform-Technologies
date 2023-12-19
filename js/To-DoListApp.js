toDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!toDoInput.value) {
        alert('Please enter a task.');
        return;
    }
    let newTask = document.createElement('li');
    newTask.style.display = 'flex';
    newTask.style.alignItems = 'center';
    newTask.style.justifyContent = 'space-between';
    newTask.style.padding = '5px';
    newTask.style.marginBottom = '5px';
    newTask.style.border = '1px solid #ddd';
    newTask.style.borderRadius = '3px';
    
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.width = '100px';
    deleteButton.style.marginRight = '200px';
    deleteButton.addEventListener('click', function() {
        toDoList.removeChild(newTask);
    });
    
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.style.width = '30px';
    checkBox.style.height = '30px';
    checkBox.style.marginLeft = '200px';
    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            newTask.style.textDecoration = 'line-through';
        } else {
            newTask.style.textDecoration = 'none';
        }
    });
    
    newTask.appendChild(checkBox);
    newTask.appendChild(document.createTextNode(' '));
    newTask.appendChild(document.createTextNode(toDoInput.value));
    newTask.appendChild(deleteButton);
    toDoList.appendChild(newTask);
    toDoInput.value = '';
});
