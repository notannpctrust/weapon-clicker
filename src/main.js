let points = 100000

let pointCounter = document.getElementById("pointCounter")

let kunaiLevel = 0

let kLevel = document.getElementById('klevel')

function changePoint(amount){
  points = points + amount


  console.log("points")


  pointCounter.innerText = "Damage Built up:"  + points
  

}

function buyKunai(){
      if (points >= 100) {
        changePoint(-100)
      kunaiLevel = kunaiLevel + 1
      kLevel.innerText = "Level:" + kunaiLevel
    
}    else {
         alert("get ur dmg up not ur money up ")
           
}

}




function bigClick(){
         let basePoint = 1 + (kunaiLevel ** 1.05)

         changePoint(basePoint)


}