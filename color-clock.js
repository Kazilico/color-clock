var interval = setInterval(function() {

  var currentTime = new Date();
  
  var hours = currentTime.getHours()
  var rgbHours = convertTimeframe(hours, "hours")

  var minutes = currentTime.getMinutes()
  var rgbMinutes = convertTimeframe(minutes, "minutes")

  var seconds = currentTime.getSeconds()
  var rgbSeconds = convertTimeframe(seconds, "seconds")

  var hexHours = parseInt(rgbHours).toString(16)
    if (hexHours.length === 1) {
      hexHours = "0" + hexHours
    }
  var hexMinutes = parseInt(rgbMinutes).toString(16)
    if (hexMinutes.length === 1) {
      hexMinutes = "0" + hexMinutes
    }    
  var hexSeconds = parseInt(rgbSeconds).toString(16)
    if (hexSeconds.length === 1) {
      hexSeconds = "0" + hexSeconds
    }

  
  var hexString = "#" + hexHours + hexMinutes + hexSeconds

  $("#clocky").html(currentTime.toLocaleTimeString());

  $("#hexy").html(hexString);
  
  $("#container").css("background", hexString)

}, 1000)

// Setting up the click event
$("#clocky").on("click", function(evt){

  $("#clocky").toggle(1000)
  $("#hexy").toggle(1000)

})
$("#hexy").on("click", function(evt){

  $("#clocky").toggle(1000)
  $("#hexy").toggle(1000)

})



var convertTimeframe = function(amount, unit) {

  switch (unit) {
    case "hour":
    case "hours":
      return Math.round((amount / 23) * 255)
    case "minute":
    case "minutes":
    case "second":
    case "seconds":
      return Math.round((amount / 59) * 255)
    default:
      return 0;
  }
}