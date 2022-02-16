window.addEventListener("load", function () {
  const todo = document.querySelector(".input-todo"),
    button = document.querySelector(".button"),
    todoList = document.querySelector(".todo-list"),
    noToDO = document.querySelector(".todo-list p"),
    alert = document.querySelector(".alert"),
    alertText = document.querySelector(".alert h3"),
    priority = document.querySelectorAll(".priority-list input"),
    done = document.querySelector(".done"),
    doneText = document.querySelector(".done h3");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Проверка на содержимое символа

    if (todo.value.trim().length === 0) {
      alertEmptyTodo();
      alertText.textContent = "Введите список";
    } else {
      // Разделение на приоритеты

      priority.forEach((priorityItem) => {
        if (priorityItem.checked == true) {
          todoPriority = priorityItem;
        }
      });

      // Сообщение если пока нет записей

      if (todoList.childNodes.length > 1) {
        noToDO.style.display = "none";
      } else noToDO.style.display = "block";

      // Добавление записей в список

      const todoItem = document.createElement("div");
      todoItem.setAttribute("class", `priority${todoPriority.value} todo-item`);
      todoList.appendChild(todoItem);
      todoItem.textContent = `${todo.value}`;
      todo.value = "";
      priority[1].checked = true;

      // Удаление записей из списка

      todoItem.addEventListener("dblclick", () => {
        todoItem.remove();
        doneTodo();
        doneText.textContent = "Удалено";
      });

      // Перечеркивание выполненнных записей

      todoItem.addEventListener("click", () => {
        todoItem.classList.toggle("todo-item-done");
      });
    }
  });

  // Сообщение при пустом вводе

  function alertEmptyTodo() {
    let timerId = setInterval(() => (alert.style = `display: block;`), 100);
    setTimeout(() => {
      clearInterval(timerId);
      alert.style.display = "none";
    }, 2000);
  }

  // Сообщение при удалении записей

  function doneTodo() {
    let timerId = setInterval(() => (done.style.display = "block"), 100);
    setTimeout(() => {
      clearInterval(timerId);
      done.style.display = "none";
    }, 1500);
  }
});
