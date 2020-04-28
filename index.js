/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
} 


function greet(time) {
  const timeItIs = parseInt(time);
  
  if (timeItIs < 12) {
    return "Good Morning";
  }
  
  else if (timeItIs < 5 && timeItIs < 12) {
    return "Good Afternoon";
  }
  
  else {
    return "Good Evening";
  }
}


