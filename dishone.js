//Testing Array 

let Menu = document.querySelector("#Menu")

console.log(dishes)

  function courseDishes(course) {
    let Dishes = dishes.filter(function(dish){
      return dish.course == course
      })
      return Dishes
      }

let allbtn = document.querySelector("#allbtn")
allbtn.addEventListener('click',function(){
  buildDishes(dishes)
})

let startbtn = document.querySelector("#startbtn")
startbtn.addEventListener('click',function(){

let Dishes = courseDishes("Starters")
buildDishes(Dishes)

})

let runbtn = document.querySelector("#runbtn")
runbtn.addEventListener('click',function(){

let Dishes = courseDishes("Entrees")
buildDishes(Dishes)

})

let gotbtn = document.querySelector("#gotbtn")
gotbtn.addEventListener('click',function(){

let Dishes = courseDishes("Desserts")
buildDishes(Dishes)

})


    function buildDishes(dishesMenu){
      Menu.innerHTML = ''
      // Loop
      dishesMenu.forEach(function(dish){
    
    
        let dishOne = `<img src='${dish.imageURL}' />
        <h3>
        ${dish.title}
        </h3>
        <h3>
        ${dish.course}
        </h3>
        <p>
          ${dish.description}
        </p>
        <p>
          ${dish.price}
        </p>
        `
        Menu.innerHTML += dishOne
      })
      }
      buildDishes(dishes)