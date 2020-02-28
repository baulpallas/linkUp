import { ConfigurationContext } from "twilio/lib/rest/flexApi/v1/configuration";

$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});

let zipcodeapi = process.env.ZIPCODE_API;
console.log("debug", zipcodeapi);
console.log(zipcodeapi);
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
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function geoFindMe() {
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      prefs["lat"] = latitude;
      prefs["lng"] = longitude;
      updateZip();
    }
    function error() {
      status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
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

  async function prefpush() {
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
        return data;
      })
      .catch(err => console.log("error creating preferences: ", err));
  }

  const moveToNextPage = async () => {
    const result = await prefpush();
    location.reload();
  };
  moveToNextPage();
});

function updateZip() {
  fetch(
    `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius/ByLatLon?latitude=${latitude}&longitude=${longitude}&maximumradius=1&minimumradius=0&key=${zipcodeapi}`
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      $("#zipcode").val(myJson.DataList[0].Code);
    });
}
