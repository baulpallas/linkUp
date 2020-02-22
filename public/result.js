$(document).ready(function() {
  $(".disclaimer").css("display", "none");
});
console.log("hello");
const results = [
  {
    name: "Chipotle",
    address: "123 West 10th Street, New York, NY 10000",
    price: 2,
    openNow: true,
    yelpURL: ""
  },
  {
    name: "Starbucks",
    address: "345 West 9th Street, New York, NY 10000",
    price: 4,
    openNow: true,
    yelpURL: ""
  },
  {
    name: "Chick-fil-a",
    address: "567 West 8th Street, New York, NY 10000",
    price: 3,
    openNow: true,
    yelpURL: ""
  }
];

results.forEach(result => {
  switch (result.price) {
    case 1:
      result.price = "$";
      break;
    case 2:
      result.price = "$$";
      break;
    case 3:
      result.price = "$$$";
      break;
    case 4:
      result.price = "$$$$";
      break;
    default:
      result.price = "Not Available";
  }
  if (result.openNow) {
    $(".results-collection").append(
      `  <div class="card blue-grey darken-3">
      <div class="card-content white-text">
          <div class="space-between"><span class="card-title">${result.name}</span><p>${result.price}</p></div>
          <p>${result.address}</p>
          
      </div>
      <div class="card-action">
          <a style="margin: 0" href="${result.yelpURL}">View on Yelp</a>
      </div>
  </div>
      `
    );
  } else $(".results-collection").append(
});
