// adding a task
var inputForm = document.querySelector(".container .content form")
var inputField=document.querySelector(".container .content #to-do-input")
var tasks=document.getElementById("tasks")
var taskCounter = document.querySelector("#task-counter span")
var checkedCounter = document.querySelector("#delete-counter span")
var counterSection= document.querySelector("#counter-section")
var listOfTasks = document.querySelector(" .content .list")

taskCounter.innerHTML= 0
checkedCounter.innerHTML=0



inputForm.addEventListener("submit",function (e) {
    e.preventDefault();
    // prevent empty task
    if (inputField.value.trim() === "") {
        return;  
    }
    // add new task
    listOfTasks.style.display="block"
    var newTask = document.createElement('div');
    newTask.innerHTML=`
                        <div class="item">
                        <i class="fa-regular fa-square-check check-box"></i>

                        <div class="task-text">
                            ${inputField.value}
                        </div>

                        <i class="fa-solid fa-circle-xmark cancel-task"></i>
                    </div>
    `
    tasks.appendChild(newTask);

    selectAll.style.display="flex"
    counterSection.style.display="flex"
    taskCounter.innerHTML=parseInt(taskCounter.innerHTML)+1;
    if (parseInt(taskCounter.innerHTML)==0) {
        taskCounter.innerHTML=0
    }

    inputField.value = "";

})


// delete a task
tasks.addEventListener("click", function(e) {
    if (e.target.classList.contains("cancel-task")) {
        e.target.closest(".item").remove();
        taskCounter.innerHTML=parseInt(taskCounter.innerHTML)-1;

    if (tasks.querySelectorAll('.item').length==0) {
        taskCounter.innerHTML=0
        selectAll.style.display="none"
        counterSection.style.display="none"
        listOfTasks.style.display="none"
    }}
});



// check the item

tasks.addEventListener("click",function (e) {
    if(e.target.classList.contains("check-box")){
        e.target.classList.toggle("check-box-color")
        e.target.closest(".item").querySelector(".task-text").classList.toggle("checked")
       
        if (e.target.classList.contains("check-box-color")) {
            checkedCounter.innerHTML = parseInt(checkedCounter.innerHTML) + 1;
            taskCounter.innerHTML = parseInt(taskCounter.innerHTML) - 1;

        } else {
            checkedCounter.innerHTML = parseInt(checkedCounter.innerHTML) - 1;
            taskCounter.innerHTML = parseInt(taskCounter.innerHTML) + 1;
        }
    }
})

// select all tasks
var selectAll = document.querySelector("#select-all");
var selectAllBox = document.querySelector(".select-all-box");
var selectAllText = document.querySelector("#select-all-text");

selectAll.addEventListener("click", function () {
    const isChecked = !selectAllBox.classList.contains("check-box-color");
    selectAllBox.classList.toggle("check-box-color", isChecked);

    let countChecked = 0;
    tasks.querySelectorAll(".check-box").forEach((el) => {
        el.classList.toggle("check-box-color", isChecked);
        el.closest(".item").querySelector(".task-text").classList.toggle("checked", isChecked);

        if (isChecked) countChecked++;
    });

    checkedCounter.innerHTML = isChecked ? countChecked : 0;
    taskCounter.innerHTML = isChecked ? 0 : tasks.querySelectorAll(".item").length;
});
