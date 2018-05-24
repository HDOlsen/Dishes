//Testing Array 
  
  class Dish {
    Constructor(){
    this.dishes = dishes

  }  

    build(){
    var btn = document.getElementById("btn")
    var runbtn = document.getElementById("runbtn")
    var gobtn = document.getElementById("gobtn")

    var contain = document.getElementById("container")
    contain.className = "div"

    var menu = document.createElement("h2")
    menu.innerHTML = "Menu"
    contain.appendChild(menu)

    var opening = document.createElement("p")
    opening.innerHTML = "Our hand-crafted menu uses only the freshest produce and meats, sourced locally and sustainably.  Since 1979 we have supported the farm-to-table experience."
    menu.appendChild(opening)
  
  }  
  }
  
  let d = new Dish()
  d.build()


