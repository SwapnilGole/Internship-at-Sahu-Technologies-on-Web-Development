// jquery
$(document).ready(() => {
  // toogle btn
  $(".menu-btn").click(() => {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".navbar .nav-link").click(() => {
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });
});



// google map
function initMap() {
  let location = {lat: 19.21152,lng: 73.16221};
  let map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center: location
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}