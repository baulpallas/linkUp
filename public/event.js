let submiteventbtn = document.getElementById("submit-event-btn");
let eventid;

let eventform = document.getElementById("eventform");
submiteventbtn.addEventListener("click", evt => {
  evt.preventDefault();
  console.log("Hello!");
  let eventinputs = eventform.querySelectorAll("input");
  const newEvent = {};
  let creatorid = localStorage.getItem("creatorid");
  newEvent.creatorid = creatorid;
  for (let input of eventinputs) {
    newEvent[input.name] = input.value;
  }
  console.log(newEvent.name);

  fetch(`/api/creator/${creatorid}/event`, {
    method: "POST",
    body: JSON.stringify(newEvent),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      eventid = data.eventid;
      localStorage.setItem("eventid", eventid);
      console.log(eventid);
      console.log("successfully created new creator: ", data);
    })
    .catch(err => console.log("error creating new creator : ", err));
});

$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});
