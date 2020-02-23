$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});

let prefs = {};
let findmebtn = document.getElementById("find-me-btn");
let latitude;
let longitude;
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
  // fetch("/auth/login", {
  //   method: "POST",
  //   body: JSON.stringify(loginuser),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     // creatorid = data.creatorid;
  //     // console.log(creatorid);
  //     console.log("successfully created new creator: ", data);
  //     console.log(data.nickname);
  //     $("#host-welcome").append(
  //       `Welcome ${data.nickname}! <br>Let's get started.`
  //     );
  //   })
  //   .catch(err => console.log("error creating new creator : ", err));
});
