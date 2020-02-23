$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});

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
      console.log(latitude);
      console.log(longitude);
    }

    function error() {
      status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
      console.log("hello");
    } else {
      console.log("itworked!");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
});

let prefbtn = document.getElementById("submit-pref");
let prefform = document.getElementById("pref-form");
prefbtn.addEventListener("click", evt => {
  evt.preventDefault();
  let prefinput = prefform.querySelectorAll("input");
  let prefs = {};
  for (let pref of prefinput) {
    prefs[pref.name] = pref.value;
  }
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
