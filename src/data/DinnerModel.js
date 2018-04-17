const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  var allClickedDishes = [];
  let menu = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.clickedDish = function(title, image, ingredients, preparation, price){

    const dish= {
      title: title,
      price: price,
      image: image,
      preparation: preparation,
      ingredients: ingredients
    }

    allClickedDishes.push(dish);
  }

  this.addToMenu = function () {

    var num = allClickedDishes.length - 1;
    // last element in clicked dishes list
    var dish = allClickedDishes[num];

    console.log("addToMenu")
    /*if(menu.length < 1){
      menu.push(dish);
    }else{
      for(var i = 0; i< menu.length ; i++){
        // compare all menu items to last item in clicked dish-list
        if (menu[i].title === dish.title){
          console.log("identical");
          return;
        }
        //menu.push(allClickedDishes[num]);
      }
      menu.push(dish);
    }*/
    localStorage.setItem("menu", dish);
    menu.push(dish)
    console.log(allClickedDishes)
    console.log(menu)
   
    //console.log(menu[])
    notifyObservers();
  }

  /*this.addDishToMenu = function(){
    //console.log(modelInstance.title);
  }
    // vill plocka ut image, titel, preparation, pris från onedish.js och spara dem här i en lista som json-objekt.
    var num = allClickedDishes.length - 1;
    var dish = allClickedDishes[num];
    // if element not in menu
    if(menu.length < 1){
      menu.push({'title': dish.title, 'price': dish.pricePerServing, 'image': dish.image, 'prep': dish.instructions});
    } else {
      for(key in menu){
        // if the dish already exists in the menu, exit the function
        if (menu[key].title === dish.title){
          console.log("identical");
          return;
        }
      }// add to menu since it isn't already added in the menu
      menu.push({'title': dish.title, 'price': dish.pricePerServing, 'image': dish.image, 'prep': dish.instructions});
    }
    notifyObservers();
  }*/

  // this.getAllDishes = function () {
  //   //const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'; 
  //   // https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=dessert&query=Chocolate

  //   // vi vill ha type och filter från searchbar
  //   // Searchbar.state.type
  //   // const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=dessert';
  //   const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'

  //   return fetch(url, httpOptions)
  //     .then(processResponse)
  //     .catch(handleError)
  // }

  this.getDishes = function (options) {
    //const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'; 
    // https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=dessert&query=Chocolate

    // vi vill ha type och filter från searchbar
    // Searchbar.state.type
    // const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=dessert';
    const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?'
    
    // lägg till sökningen till query string
    const params = Object.keys(options)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(options[k]))
      .join('&');

    const url = BASE_URL + params;

    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

  this.getDish = function(id){
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information';
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }
  
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
