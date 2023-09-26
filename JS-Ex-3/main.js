let todo = [];
let editText;
let lists = {};

function submit() {
  let task = document.getElementById("task").value;

  if (task == "") {
    document.getElementById("error").innerHTML = "Task required!";

  } else {
    document.getElementById("error").innerHTML = "";
  }

  if (task == "") {
    return false;
  }

  list();
  document.getElementById("task").value = "";
}
function listAdd() {
  editText = undefined;
  let k = "";
  for (i = 0; i < todo.length; i++) {
    k += "<ul>";
    k += "<li>" + todo[i].task + "  "+ '<button type="button" class="btn btn-success" onclick= "Edit('+ i +')">Edit</button>  <button type="button" class="btn btn-danger" onclick= "Delete('+ i +')">Delete</button>'+"</li>";
    k += "</ul>";
  }
  document.getElementById("listed").innerHTML = k;
}
function list() {
  let task = document.getElementById("task").value;

  let lists = { task };
  console.log(lists);

  if (editText != undefined) {
    todo[editText].task = lists.task;
  } else {
    todo.push(lists);
  }
  listAdd();
}
function Edit(id) {
  editText = id;
  console.log(editText);
  document.getElementById("task").value = todo[id].task;
}

function Delete(id) {
  todo.splice(id, 1);
  console.log(id);
  listAdd();
}







