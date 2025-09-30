
//adding a new and gate when button .andbtn pressed
document.querySelector(".andbtn").addEventListener("click", () => {
  const AND = document.body.querySelector(".and").cloneNode(true)
  AND.querySelector(".controls").style.visibility = "hidden"
  document.body.querySelector(".genrate").append(AND)



})

//adding a new and or when button .orbtn pressed
document.querySelector(".orbtn").addEventListener("click", () => {
  const OR = document.body.querySelector(".or").cloneNode(true)
  OR.querySelector(".controls").style.visibility = "hidden"
  document.body.querySelector(".genrate").append(OR)



})


//adding a new not gate when button .notbtn pressed
document.querySelector(".notbtn").addEventListener("click", () => {
  const NOT = document.body.querySelector(".not").cloneNode(true)
  NOT.querySelector(".controls").style.visibility = "hidden"
  document.body.querySelector(".genrate").append(NOT)



})



document.body.addEventListener("mousedown", (e) => {

  // turning controls on and of for our logic gates
  if (e.target.classList.contains("gate") && !(e.target.querySelector(".controls").style.visibility === "visible")) {

    e.target.querySelector(".controls").style.visibility = "visible"
  }
  else if (e.target.style.visibility == "visible") {

    e.target.style.visibility = "hidden"
  }

  if(e.target.parentNode.classList.contains("controls")){
    console.log(document.querySelector(".gate").style.top)
  }
   



})

