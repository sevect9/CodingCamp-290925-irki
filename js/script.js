let todos = [];

function renderTodo() {
  const todoList = document.getElementById("todo-List");
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="p-3 text-slate-400">No task found</td></tr>`;
    return;
  }

  todos.forEach((todo, index) => {
    todoList.innerHTML += `
        <tr class="bg-slate-700">
            <td class="p-2 ${todo.done ? "line-through text-gray-400" : ""}">${
      todo.text
    }</td>
            <td class="p-2">${todo.date}</td>
            <td class="p-2">${todo.done ? "✅ Done" : "⏳ Pending"}</td>
            <td class="p-2 flex justify-center gap-2">
                ${
                  !todo.done
                    ? `
          <button onclick="toggleDone(${index})"
                  class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
            Done
          </button>`
                    : ""
                }
        <button onclick="deleteTodo(${index})"
                class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
          Delete
        </button>
            </td>
          </tr>
        `;
  });
}

function addTodo() {
  const taskInput = document.getElementById("input-teks");
  const dateInput = document.getElementById("input-date");

  if (taskInput.value.trim() === "" || dateInput.value === "") {
    alert("Please enter task and date!");
    return;
  }

  todos.push({
    text: taskInput.value,
    date: dateInput.value,
    done: false,
  });

  taskInput.value = "";
  dateInput.value = "";
  renderTodo();
}

function toggleDone(index) {
  todos[index].done = true;
  renderTodo();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodo();
}

function deleteAll() {
  todos = [];
  renderTodo();
}

renderTodo();
