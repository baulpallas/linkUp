let submiteventbtn = document.getElementById("submit-event-btn");

let eventform = document.getElementById("eventform");
submiteventbtn.addEventListener("click", evt => {
  evt.preventDefault();
  console.log("Hello!");
  let eventinputs = eventform.querySelectorAll("input");
  const newEvent = {};
<<<<<<< HEAD
  let creatorid = localStorage.getItem("creatorid");
=======

>>>>>>> master
  newEvent.creatorid = creatorid;
  for (let input of eventinputs) {
    newEvent[input.name] = input.value;
  }
  console.log(newEvent.name);
  localStorage.setItem("eventname", newEvent.name);
  fetch("/api/event", {
    method: "POST",
    body: JSON.stringify(newEvent),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("successfully created new creator: ", data);
    })
    .catch(err => console.log("error creating new creator : ", err));
});
