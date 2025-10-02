//variable to store durrent clicked gate
let activegate = null

//a fuction to move a gate
function MoveGate(Gate,direction) {
  let posTop = 0
  let posLeft = 0
  posTop = parseInt(window.getComputedStyle(Gate).getPropertyValue("top"))
  posLeft = parseInt(window.getComputedStyle(Gate).getPropertyValue("left"))

  if(direction === "X"){
    Gate.style.left = posLeft+10 + "px"
    console.log("moved")
  }
  else if(direction === "-X"){
    Gate.style.left = posLeft-10 + "px"
    console.log("moved")
  }
  else if(direction === "Y"){
    Gate.style.top = posTop-10 + "px"
    console.log("moved")
  }
  else{
    Gate.style.top = posTop+10 + "px"
    console.log("moved")
  }
  
}

//the fuction to genrate a gate
function GenrateGate(GateNumber) {
      switch (GateNumber) {
        case 1:
            const AND = document.body.querySelector(".and").cloneNode(true)
            document.body.querySelector(".genrate").append(AND)
          break;
        case 2:
            const OR = document.body.querySelector(".or").cloneNode(true)
            document.body.querySelector(".genrate").append(OR)
            break;
        case 3:
            const NOT = document.body.querySelector(".not").cloneNode(true)
            document.body.querySelector(".genrate").append(NOT)
        default:
          console.log("ran GenrateGate")
          break;
      }
}

//adding a new and gate when button .andbtn pressed
document.querySelector(".andbtn").addEventListener("click", () => {
  GenrateGate(1)

})

//adding a new and or when button .orbtn pressed
document.querySelector(".orbtn").addEventListener("click", () => {
  GenrateGate(2)

})

//adding a new not gate when button .notbtn pressed
document.querySelector(".notbtn").addEventListener("click", () => {
  GenrateGate(3)

})

document.body.addEventListener("mousedown", (e) => {
activegate = e.target.closest(".gate")
  
  // runns only if target is a gate && controls of this target is not visible
  if (e.target.classList.contains("gate") && !(e.target.querySelector(".controls").style.visibility == "visible")) {

    e.target.querySelector(".controls").style.visibility = "visible"
    console.log("i am no longer hidden")
  }

  //runns only if the target controls are visible 
  else if (e.target.style.visibility == "visible") {
    e.target.style.visibility = "hidden"
    console.log("i am no longer visible")
  }

  if(e.target.parentNode.classList.contains("controls")){
    console.log("initiated")
    Gate = e.target.closest(".gate")
    if(e.target.classList.contains("X")){
      MoveGate(Gate,"X")
    }
    else if(e.target.classList.contains("-X")){
      MoveGate(Gate,"-X")
    }
    else if(e.target.classList.contains("Y")){
      MoveGate(Gate,"Y")
    }
    else{
      MoveGate(Gate,"-Y")
    }
  }


})

  //controls functnality with keyboard added here
  document.body.addEventListener("keydown", (event)=>{
    
    const KeyName = event.key
    console.log(KeyName)
    console.log(activegate)
      if(!activegate){
        return
      }
 
      if(KeyName === "ArrowRight"){
          
          MoveGate(activegate,"X")
      }

      else if(KeyName === "ArrowLeft"){
        MoveGate(activegate,"-X")
      }
      else if(KeyName === "ArrowUp"){
        MoveGate(activegate,"Y")
      }
      else if(KeyName === "ArrowDown"){
        MoveGate(activegate,"-Y")
      }

    })
 
