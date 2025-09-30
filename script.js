
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
    let current_gate = e.target.parentNode.parentNode
    console.log(current_gate)

    let pos_top = parseInt(window.getComputedStyle(current_gate).getPropertyValue("top") )
    let pos_left = parseInt(window.getComputedStyle(current_gate).getPropertyValue("left"))

    if(e.target.classList.contains("X")){
          current_gate.style.left = pos_left+10+"px"
    }
    else if(e.target.classList.contains("-X")){
          current_gate.style.left = pos_left-10+"px"
    }
    else if(e.target.classList.contains("Y")){
          current_gate.style.top = pos_top-10+"px"
    }
    else{
      current_gate.style.top = pos_top+10+"px"
    }

    
    console.log(pos_top)
    
  }
   



})

