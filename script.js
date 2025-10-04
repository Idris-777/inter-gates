//variable to store durrent clicked gate
let activegate = null


// function to genrate random color
function getrandomcolor(){
    let v1 = Math.ceil(Math.random()*(255))
    let v2 = Math.ceil(Math.random()*(255))
    let v3 = Math.ceil(Math.random()*(255))

    // console.log(`rgb(${v1}, ${v2}, ${v3})`)

    return (`rgb(${v1}, ${v2}, ${v3})`)
}
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
  if(document.querySelectorAll(".object").length > 11){
      alert("remove those gates from here to add more KID")
      return
  }
  
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
            break;
        case 4:
            const SOURCE = document.body.querySelector(".source").cloneNode(true)
            document.body.querySelector(".genrate").append(SOURCE)
            break;

        
          
          
      }
}

function Source() {

  document.querySelectorAll(".source").forEach((e)=>{
    let bit1 = e.dataset.bit1
    if(Number(bit1) == 1){
      e.classList.add("source-btn-toggle")
    }
  })

}

function and() {

  document.querySelectorAll(".and").forEach((e)=>{
    let bit1 = e.dataset.bit1
    let bit2 = e.dataset.bit2
    let bito = e.dataset.bito

    
    if(Number(bit1) && Number(bit2) == 1){

      bito = 1
      e.dataset.bito = bito
      
    }
  })

}

function or() {

  document.querySelectorAll(".or").forEach((e)=>{
    let bit1 = e.dataset.bit1
    let bit2 = e.dataset.bit2
    let bito = e.dataset.bito

    
    if(Number(bit1) && Number(bit2) == 1){

      bito = 1
      e.dataset.bito = bito
      
      
    }
  })

}

function not() {

  document.querySelectorAll(".not").forEach((e)=>{
    let bit1 = e.dataset.bit1
    let bito = e.dataset.bito

    switch (bit1) {
      case 1:
        bito = 0
        break;
      case 0:
        bito = 1
      
    }
    e.dataset.bio = bito
    
  })

}


function connect(node1,node2) {

  bit1 = node1.dataset.bit1
  bit2 = node2.dataset.bit2

  let color = getrandomcolor()
  node1.style.border = `3px solid ${color}`
  node2.style.border = `3px solid ${color}`



  if(bit1==bit2){
    return
  }

  else{
    bit1 = 1
    bit2 = 1
  }

  not()
  and()
  Source()
  or()

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


//main event loop 
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
document.addEventListener("mousedown", (e)=>{
  if(e.target.parentNode.classList.contains("controls")){
    console.log("initiated")
    Gate = e.target.closest(".object")
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
  
//event listner for turning source on and off
document.addEventListener("mousedown", (e)=>{



  if(e.target.parentNode.classList.contains("source") && e.target.classList.contains("source-btn"))
  {
    
    
    e.target.closest(".source").classList.toggle("source-btn-toggle")
  }

})
  
  



  //event listner for controls functnality with keyboard
  document.body.addEventListener("keydown", (event)=>{
    
    const KeyName = event.key
    console.log(KeyName)
    console.log(activegate)
      if(!activegate || activegate.querySelector(".controls").style.visibility !== "visible"){
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

