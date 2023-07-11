// Variable Declarations

const submitBtn = document.getElementById("submit__btn");
const taskContainer = document.getElementById("task__container");
const deleteTaskModal = document.getElementById("delete-task");
const toastContainer = document.getElementById("toast-container");

let deleteBtn;
let toast;
let taskName;
let deleteTaskBtn = document.getElementById("delete-btn");
let cancelBtn = document.getElementById("cancel-btn");

// We get the value from the input with the id new__task and create a task with that value

submitBtn.addEventListener("click", () => {
  taskName = document.getElementById("new__task").value;
  if (taskName === "") {
    createInfoToast();
  } else {
    taskContainer.innerHTML += `
    <div class="task">
        <p class="taskname">${taskName}</p>
        <button class="delete__btn"><i class="bi bi-trash-fill"></i></button>
    </div>
`;

// We create an array of the deleteTask btns 
// We open/close the modal to confirm the user want to delete the clicked task

    deleteBtn = document.querySelectorAll(".delete__btn");
    deleteBtn = Array.from(deleteBtn);
    deleteBtn.forEach((element) => {
      element.addEventListener("click", () => {
        deleteTaskModal.showModal();
        deleteTaskBtn.addEventListener("click", () => {
          deleteTaskModal.close();
          createSuccessToast();
          removeTask(element);
        });
        cancelBtn.addEventListener("click", () => {
          deleteTaskModal.close();
        });
      });
    });
  }
});


// We create a success toast when the task is deleted

function createSuccessToast() {
  toastContainer.innerHTML += `
  <div class='toast' data-status='toast-success'>
      <i class="bi bi-check-circle-fill"></i>
      <p>Task has been deleted succesfully</p>
    </div>`;
  toast = document.getElementsByClassName("toast");
  toast = Array.from(toast);
  setTimeout(() => {
    removeToast();
  }, 3000);
}

// We create an info toast to inform the user that the taskname can not be empty

function createInfoToast() {
  toastContainer.innerHTML += `
  <div class='toast' data-status='toast-info'>
    <i class='bi bi-info-circle-fill'></i>
    <p>Please enter a name for the task</p>
  </div>`;
  toast = document.getElementsByClassName("toast");
  toast = Array.from(toast);
  setTimeout(() => {
    removeToast();
  }, 3000);
}

toastContainer.addEventListener("click", (element) => {
  removeToast();
});

// We remove the toast that have been clicked/has expired its time

function removeToast() {
  toast.forEach((element) => {
    element.style.right = "-400px";
    setTimeout(() => {
      element.remove()
    }, 1000)
  });
}

// We remove the task

function removeTask(element) {
  element.parentElement.remove();
}