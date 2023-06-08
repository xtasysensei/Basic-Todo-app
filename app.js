const todo = document.querySelector(".todo");
const button = document.querySelector(".btn");
const addTask = document.querySelector(".addTask");
const addTime = document.querySelector(".addTime");
const addDate = document.querySelector(".addDate");

const addTodoItem = function () {
	if (addTask.value && addTime.value) {
		todo.innerHTML += `<div>
							<input class="checkbox" type="checkbox"/input>
							<strong><span>${addTask.value}</span></strong>
							<br/>
							<span>${addTime.value}</span>
						</div><br/>`;
		addTask.value = "";
		addTime.value = "";
	} else {
		alert("Add task and time");
	}
};

button.addEventListener("click", addTodoItem);
