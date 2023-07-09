const submitBtn = document.getElementById("submit__btn");
const taskContainer = document.getElementById("task__container");
const deleteTaskModal = document.getElementById("delete-task");
const toastContainer = document.getElementById("toast-container");

let deleteBtn;
let toast;

submitBtn.addEventListener("click", () => {
  let taskName = document.getElementById("new__task").value;
  if (taskName === "") {
    createInfoToast();
    return;
  }
  taskContainer.innerHTML += `
        <div class="task">
            <p class="taskname">${taskName}</p>
            <button class="delete__btn"><i class="bi bi-trash-fill"></i></button>
        </div>
    `;
  deleteBtn = document.querySelectorAll(".delete__btn");
  deleteBtn = Array.from(deleteBtn);
  deleteBtn.forEach((element) => {
    element.addEventListener("click", () => {
      let btn1 = document.getElementById("yes");
      let btn2 = document.getElementById("no");
      deleteTaskModal.showModal();
      btn1.addEventListener("click", () => {
        deleteTaskModal.close();
        createSuccessToast();
      });
      btn2.addEventListener("click", () => {
        deleteTaskModal.close;
      });
    });
  });
});

function createSuccessToast() {
  toastContainer.innerHTML += `
  <div class='toast' data-position='toast-success'>
      <i class="bi bi-check-circle-fill"></i>
      <p>Task has been deleted succesfully</p>
    </div>`;
  toast = document.getElementsByClassName("toast");
  toast = Array.from(toast);
  setTimeout(() => {
    removeToast();
  }, 3000)
}

function createInfoToast() {
  toastContainer.innerHTML += `
  <div class='toast' data-position='toast-info'>
    <i class='bi bi-info-circle-fill'></i>
    <p>Please enter a name for the task</p>
  </div>`;
  toast = document.getElementsByClassName("toast");
  toast = Array.from(toast);
  setTimeout(() => {
    removeToast();
  }, 3000)
}

function removeToast() {
  console.log(toast)
  toast.forEach((element) => {
    element.style.right = '-400px'
  })
}