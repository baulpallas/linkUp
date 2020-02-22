$("#host-btn").click(function() {
  $(".host").css("display", "block");
  $(".welcome-msg").css("display", "none");
  $(".disclaimer").css("display", "none");
});
$("#guest-btn").click(function() {
  $(".guest").css("display", "block");
  $(".welcome-msg").css("display", "none");
  $(".disclaimer").css("display", "none");
});
$("#new-host-btn").click(function() {
  $(".newhost").css("display", "block");
  $(".host").css("display", "none");
});
$("#existing-host-btn").click(function() {
  $(".exisitnghost").css("display", "block");
  $(".host").css("display", "none");
});
$("#submitbtn").click(function() {
  $(".host-home").css("display", "block");
  $(".newhost").css("display", "none");
});
// $("#log-in-btn").click(function() {
//   $(".host-home").css("display", "block");
//   $(".exisitnghost").css("display", "none");
// });
// $("#new-event-btn").click(function() {
//   $(".new-event").css("display", "block");
//   $(".host-home").css("display", "none");
// });
// $("#submit-event-btn").click(function() {
//   $(".new-event").css("display", "none");
//   $(".event-id").css("display", "block");
// });
// $(".enter-pref").click(function() {
//   $(".event-id").css("display", "none");
//   $(".guest").css("display", "none");
//   $(".pref").css("display", "block");
// });
