console.log("Starting");
let fetchbtn = document.getElementById("fetchbtn");
// fetchbtn.addEventListener("click", () => {
//     alert("Hello World");
//     console.log("Workiing")
// });

// get the request
fetchbtn.addEventListener("click", btnclickhandler);

function btnclickhandler() {
  console.log("You have clicked the button");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  // xhr.open("GET", "harry.txt", true);

  xhr.onprogress = function () {
    console.log("on progress");
  };
  xhr.onload = function () {
    // console.log(this.responseText);
    // console.log("on load workign", this.status);

    var data = JSON.parse(this.response);
    
    if (this.status === 200) {
      console.log(this.responseText);  
      console.log(data);
      let obj = document.getElementById("objdata");
      str = "";
      for (key in data) {
        str += `<li>${data[key]}</li>`;
      }
      obj.innerHTML = str;

    } else {
      console.warn("error");
    }
  };
  xhr.send();
  console.log("We are done ");
}

// send the request
let getbtn = document.getElementById("getbtn");
getbtn.addEventListener("click", btnclicksubmit);

function btnclicksubmit() {
  console.log("You have clicked the button");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.response);

      let obj = JSON.parse(this.responseText);
      console.log(obj.data);
      let objdata = obj.data
      let oput = document.getElementById("objdata");
      str = "";
      for (key in objdata) {
        for (val of key) {
          console.log(val)
          // console.log(key)

          // str += `<li>${objdata[key].id}, ${objdata[key].employee_name}, ${objdata[key].employee_salary}</li>`;
          // str += `<li>${objdata[key[val]]}</li>`;


        }

      }
      oput.innerHTML = str;
      // document.getElementById("objdata").innerHTML = this.responseText;

    } else {
      console.warn("error");
    }
  };
  xhr.send();
  console.log("on complete of populate btn");
  
}
