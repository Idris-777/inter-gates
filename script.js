//variable to store durrent clicked gate
let activegate = null
let node1 = null
let objects = 0
let connections = [
  {from:null, to:null, bit:0}
]



// function to genrate random color
function getrandomcolor() {
  let v1 = Math.ceil(Math.random() * (255))
  let v2 = Math.ceil(Math.random() * (255))
  let v3 = Math.ceil(Math.random() * (255))

  // console.log(`rgb(${v1}, ${v2}, ${v3})`)

  return (`rgb(${v1}, ${v2}, ${v3})`)
}
//The fuction to move a gate
function MoveGate(Gate, direction) {
  let posTop = 0
  let posLeft = 0
  posTop = parseInt(window.getComputedStyle(Gate).getPropertyValue("top"))
  posLeft = parseInt(window.getComputedStyle(Gate).getPropertyValue("left"))

  if (direction === "X") {
    Gate.style.left = posLeft + 10 + "px"
    console.log("moved")
  }
  else if (direction === "-X") {
    Gate.style.left = posLeft - 10 + "px"
    console.log("moved")
  }
  else if (direction === "Y") {
    Gate.style.top = posTop - 10 + "px"
    console.log("moved")
  }
  else {
    Gate.style.top = posTop + 10 + "px"
    console.log("moved")
  }

}
function setID(node) {
 objects += 1
 node.closest(".object").id = `${objects}objects`
 console.log( `${objects}objects`)
}
//the fuction to genrate a gate
function GenrateGate(GateNumber) {
  if (document.querySelectorAll(".object").length > 11) {
    alert("remove those gates from here to add more KID")
    return
  }

  switch (GateNumber) {
    case 1:
      const AND = document.body.querySelector(".and").cloneNode(true)
      document.body.querySelector(".genrate").append(AND)
      setID(AND)
      break;
    case 2:
      const OR = document.body.querySelector(".or").cloneNode(true)
      document.body.querySelector(".genrate").append(OR)
      setID(OR)
      break;
    case 3:
      const NOT = document.body.querySelector(".not").cloneNode(true)
      document.body.querySelector(".genrate").append(NOT)
      setID(NOT)
      break;
    case 4:
      const SOURCE = document.body.querySelector(".source").cloneNode(true)
      document.body.querySelector(".genrate").append(SOURCE)
      setID(SOURCE)
      break;




  }
}
function setborder(node1, node2) {
  let color = getrandomcolor()
  node1.style.border = `3px solid ${color}`
  node2.style.border = `3px solid ${color}`

}


function connect(node1, node2) {



  setborder(node1, node2)

  

  document.querySelectorAll(".nodes").forEach((e) => {




      let bit1 = node1.dataset.bit
      let bit2 = node2.dataset.bit
    

      if (bit1 == bit2) {
        console.log(node1)
        console.log(node2)
        console.log("returning")
        return
      }


      else {
        bit1 = 1
        bit2 = 1
        console.log("else has been executed")
        node1.dataset.bit = bit1

        node2.dataset.bit = bit2
      }
    
  })




  console.log(node1)
  console.log(node2)





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

document.querySelector(".source-btn-add").addEventListener("click", () => {
  GenrateGate(4)

})


//event listner for toggling controls
document.body.addEventListener("mousedown", (e) => {
  activegate = e.target.closest(".object")



  // runns only if target is a gate && controls of this target is not visible
  if (e.target.classList.contains("object") && !(e.target.querySelector(".controls").style.visibility == "visible")) {

    e.target.querySelector(".controls").style.visibility = "visible"

  }

  //runns only if the target controls are visible 
  else if (e.target.style.visibility == "visible") {
    e.target.style.visibility = "hidden"

  }

})


// event listner for on-screen controls
document.addEventListener("mousedown", (e) => {
  if (e.target.parentNode.classList.contains("controls")) {
    console.log("initiated")
    Gate = e.target.closest(".object")
    if (e.target.classList.contains("X")) {
      MoveGate(Gate, "X")
    }
    else if (e.target.classList.contains("-X")) {
      MoveGate(Gate, "-X")
    }
    else if (e.target.classList.contains("Y")) {
      MoveGate(Gate, "Y")
    }
    else {
      MoveGate(Gate, "-Y")
    }
  }
})

//event listner for turning source on and off
document.addEventListener("mousedown", (e) => {



  if (e.target.parentNode.classList.contains("source") && e.target.classList.contains("source-btn")) {
    let source = e.target.closest(".source")
    if (source.classList.contains("source-btn-toggle")) {

      source.querySelector(".input1").dataset.bit = 0
      console.log(source.querySelector(".input1").dataset.bit)

    }
    else {
      source.querySelector(".input1").dataset.bit = 1
      console.log(source.querySelector(".input1").dataset.bit)
    }

    source.classList.toggle("source-btn-toggle")

  }

})





//event listner for controls functnality with keyboard
document.body.addEventListener("keydown", (event) => {

  const KeyName = event.key
  console.log(KeyName)
  console.log(activegate)
  if (!activegate || activegate.querySelector(".controls").style.visibility !== "visible") {
    return
  }

  if (KeyName === "ArrowRight") {

    MoveGate(activegate, "X")
  }

  else if (KeyName === "ArrowLeft") {
    MoveGate(activegate, "-X")
  }
  else if (KeyName === "ArrowUp") {
    MoveGate(activegate, "Y")
  }
  else if (KeyName === "ArrowDown") {
    MoveGate(activegate, "-Y")
  }

})
//eventhandler for making connections
document.body.addEventListener("click", (e) => {
  if (!e.target.closest(".nodes")) {
    return

  }

  else {
    if (node1 == null) {
      node1 = e.target.closest(".nodes")
      // console.log(node1)
      console.log("first node detected")
    }

    else {
      connect(node1, e.target.closest(".nodes"))
      // console.log(e.target.closest(".nodes"))
      node1 = null
      console.log("second one detected and connection succesfull")
    }
  }

})

