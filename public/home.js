let submitbtn = document.getElementById("submitbtn");

let creatorid;

submitbtn.addEventListener("click", evt => {
  evt.preventDefault();
  console.log("Hello!");
  let inputform = document.getElementById("inputform");
  let formInputs = inputform.querySelectorAll("input");
  const newUser = {};
  for (let input of formInputs) {
    newUser[input.name] = input.value;
  }
  fetch("/api/creator", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      creatorid = data.creatorid;
      localStorage.setItem("creatorid", creatorid);
      console.log(creatorid);
      console.log("successfully created new creator: ", data);
      $("#host-welcome").append(
        `Welcome ${data.nickname}! <br>Let's get started.`
      );
    })
    .catch(err => console.log("error creating new creator : ", err));
});

// let submiteventbtn = document.getElementById("submit-event-btn");

// let eventform = document.getElementById("eventform");
// submiteventbtn.addEventListener("click", evt => {
//   evt.preventDefault();
//   console.log("Hello!");
//   let eventinputs = eventform.querySelectorAll("input");
//   const newEvent = {};
//   newEvent.creatorid = creatorid;
//   for (let input of eventinputs) {
//     newEvent[input.name] = input.value;
//   }
//   console.log(newEvent);
//   fetch("/api/event", {
//     method: "POST",
//     body: JSON.stringify(newEvent),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log("successfully created new creator: ", data);
//       console.log(data.nickname);
//     })
//     .catch(err => console.log("error creating new creator : ", err));
// });

let signinform = document.getElementById("signinform");
let loginbtn = document.getElementById("log-in-btn");
loginbtn.addEventListener("click", evt => {
  evt.preventDefault();
  let logininput = signinform.querySelectorAll("input");
  let loginuser = {};
  for (let user of logininput) {
    loginuser[user.name] = user.value;
  }
  fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(loginuser),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      // creatorid = data.creatorid;
      // console.log(creatorid);
      console.log("successfully created new creator: ", data);
      console.log(data.nickname);
      $("#host-welcome").append(
        `Welcome ${data.nickname}! <br>Let's get started.`
      );
    })
    .catch(err => console.log("error creating new creator : ", err));
});

let eventidform = document.getElementById("event-id");
let joinbtn = document.getElementById("join-btn");

joinbtn.addEventListener("click", evt => {
  evt.preventDefault();

  let eventidinput = eventidform.querySelectorAll("input");

  let eventidval;
  let eventtojoin = {};
  for (let event of eventidinput) {
    eventidval = event.value;
    eventtojoin[event.name] = event.value;
  }
  console.log(eventidval);
  console.log(eventtojoin);
  localStorage.setItem("eventid", eventidval);

  fetch("/auth/join", {
    method: "POST",
    body: JSON.stringify(eventtojoin),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (res.redirected) {
        window.location.href = res.url;
      }
    })
    .catch(err => console.log("error logging event : ", err));
});
