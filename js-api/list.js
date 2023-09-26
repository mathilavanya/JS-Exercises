window.onload = () => {
    table0();
  };
  
  let arr = [];
  let editText;
  let obj = {};

   async function table0() {
    let url = "https://6509263ef6553137159b003b.mockapi.io/student";
     await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((res) => {
        console.log(res);
        arr=res;
        console.log(arr);

        // table0();
        // console.log(`Title of our response :  ${arr[0].name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
    
    let l = "";
    for (let i = 0; i < arr.length; i++) {
      l += "<tr>";
      l += "<td>" + arr[i].name + "</td>";
      l += "<td>" + arr[i].age + "</td>";
      l += "<td>" + arr[i].gender + "</td>";
      l += "<td>" + arr[i].email + "</td>";
      l += "<td>" + arr[i].phone + "</td>";

      l +=
        '<td><button type="button" class="btn btn-success px-4 mt-0"  onclick="Edit(' +
        arr[i].id + 
        ')">Edit</button>  <button type="button" class="space btn btn-danger mt-0 mx-0" onclick="Delete(' +
        arr[i].id +
        ')">Delete</button></td>';
      l += "</tr>";
    }
  
    document.getElementById("dataTbl").innerHTML = l;
  }
  
  function Edit(id) {
    editText = id;
    window.location.href = "index.html?id=" + id;
   
  }
  
  function button() {
      window.location.replace(`index.html`);
  
  }
  
  function Delete(id) {
    let url = "https://6509263ef6553137159b003b.mockapi.io/student";
      fetch(url + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        console.log(`Title of our response :  ${string.name}`);
        table0()
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
   
  }
  