$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});

let prefs = {};
let findmebtn = document.getElementById("find-me-btn");
let latitude;
let longitude;
let eventid = localStorage.getItem("eventid");
console.log(eventid);
prefs.eventid = eventid;
findmebtn.addEventListener("click", evt => {
  evt.preventDefault();
  geoFindMe();
  function geoFindMe() {
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      prefs["lat"] = latitude;
      prefs["lng"] = longitude;
      console.log(prefs);
    }
    function error() {
      status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
});

let prefbtn = document.getElementById("submit-pref");

prefbtn.addEventListener("click", evt => {
  evt.preventDefault();

  let dateinput = document.getElementById("date").value;
  let timeinput = document.getElementById("time").value;
  let space = " ";
  let datespace = dateinput.concat(space);
  let joinedstring = datespace.concat(timeinput);
  let dateobj = new Date(joinedstring);
  let finalformat = dateobj.toISOString();
  prefs["availability"] = finalformat;
  let pricepref = document.getElementById("price").value;
  prefs["price"] = pricepref;
  console.log(prefs);
  fetch(`/api/event/${eventid}/preferences`, {
    method: "POST",
    body: JSON.stringify(prefs),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      prefid = data.prefid;
      localStorage.setItem("prefid", prefid);
      console.log(prefid);
      console.log("successfully added preferences: ", data);
    })
    .catch(err => console.log("error creating preferences: ", err));
});
