var allClickedDishes = [];
var menu = [];

const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.addToMenu = function(){

    var num = allClickedDishes.length - 1;
    var dish = allClickedDishes[num];

    if(menu.length < 1){
      menu.push(dish);
      localStorage.setItem("menu", JSON.stringify(dish));
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
      localStorage.setItem("menu", JSON.stringify(dish));
    }
    console.log(menu);
    //localStorage.setItem("menu", menu);
    notifyObservers();
  }

  this.getFullMenu = function(){
    if(menu[0] != null){
      var storedMenu = JSON.parse(localStorage.getItem("menu"));
      console.log(storedMenu);
      if(storedMenu[0] != null){
        menu = storedMenu;
      }
    }
    console.log(menu);
    return menu;
  }

  this.clickedDish = function(title, image, ingredients, preparation, price){
    console.log("allClickedDishes")

    const dish= {
      title: title,
      price: price,
      image: image,
      preparation: preparation,
      ingredients: ingredients
    }

    allClickedDishes.push(dish);
    console.log(allClickedDishes);
  }

  this.getDishes = function (options) {
    //const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'; 
    // https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=dessert&query=Chocolate
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
      alert("you don't have an internet connection")
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
