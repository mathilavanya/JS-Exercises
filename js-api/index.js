let arr = [];
let editText;
let obj = {};

window.onload = () => {
  Edit();
};

function submit() {
  console.log(submit)
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;




  if (name == "") {
    document.getElementById("name1").innerHTML = "Name required!";
  } else {
    document.getElementById("name1").innerHTML = "";
  }
  if (age == "") {
    document.getElementById("name2").innerHTML = "Age required!";
  } else {
    document.getElementById("name2").innerHTML = "";
  }
  if (gender== "") {
    document.getElementById("name3").innerHTML = "Gender required!";
  } else {
    document.getElementById("name3").innerHTML = "";
  }
  if (email == "") {
    document.getElementById("name4").innerHTML = "Email required!";
  } else {
    document.getElementById("name4").innerHTML = "";
  }
  if (phone == "") {
    document.getElementById("name5").innerHTML = "Phone Number required!";
  } else {
    document.getElementById("name5").innerHTML = "";
  }


if (
    name == "" ||
    age == "" ||
    gender == "" ||
    email == "" ||
    phone == ""
  ) {
    return false;
  }


  let obj = { name, age,gender, email, phone};
  if (editText != undefined) {
    let url = "https://6509263ef6553137159b003b.mockapi.io/student";
    fetch(url+ "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("list.html");
        console.log(`Title of our response :  ${string.name}`)
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
   

  } else {
    let url = "https://6509263ef6553137159b003b.mockapi.io/student";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace("list.html");
        console.log(`Title of our response :  ${string.name}`)
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });

  }
}
 
function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url = new URL(url_string);
  console.log(url);
  var id = url.searchParams.get("id");
  editText=id
  console.log(editText);
  if(id){
    let url = "https://6509263ef6553137159b003b.mockapi.io/student";
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        arr = string;
        document.getElementById("name").value = arr.name;
        document.getElementById("age").value = arr.age;
        document.getElementById("gender").value = arr.gender;
        document.getElementById("email").value = arr.email;
        document.getElementById("phone").value = arr.phone;
        console.log(`Title of our response :  ${string.name}`)
        arr = string;
        console.log(arr);
       
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      }); 
  }
}
 