const input1 = document.querySelector(".input1")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;
const taskContainer = document.querySelector(
  ".task-container"
)! as HTMLDivElement;

const addTask = (task: string) => {
  if (!task) return alert("You need to add a task first");
  const newTask = document.createElement("h6");
  newTask.innerText = task;
  newTask.classList.add("task");
  taskContainer.appendChild(newTask);
};

button.addEventListener("click", () => {
  addTask(input1.value);
});
