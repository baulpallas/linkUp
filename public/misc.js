function updateZip() {
  fetch(
    `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius/ByLatLon?latitude=${latitude}&longitude=${longitude}&maximumradius=1&minimumradius=0&key=6D8PTQLN887UTV15VBCJ`
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      $("#zipcode").val(myJson.DataList[0].Code);
    });
}
$("#submit-event-btn").click(function() {
  let partysize = $("#partysize").val();
  localStorage.setItem("partysize", partysize);
});
$(document).ready(function() {
  $("select").formSelect();
});
$(document).ready(function() {
  $(".timepicker").timepicker({
    pickTime: true,
    useSeconds: false,
    format: "hh:mm",
    interval: 30
  });
});
$(document).ready(function() {
  $(".datepicker").datepicker({});
});
