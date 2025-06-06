

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') return;
  
    const list = document.getElementById('taskList');
    const li = document.createElement('li');
  
    li.innerHTML = `
      <span onclick="toggleDone(this)">${taskText}</span>
      <button onclick="removeTask(this)">🗑️</button>
    `;
  
    list.appendChild(li);
    input.value = '';
  }
  
  function toggleDone(el) {
    el.classList.toggle('task-done');
  }
  
  function removeTask(btn) {
    const task = btn.parentElement;
    task.remove();
  }
  