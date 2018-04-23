
const httpOptions = {
  headers: {'X-Mashape-Key': 'k2x8zD2tl2mshzMW9pmsxLv8y7Elp1bJxTJjsnm11xhlvs7qCX'}
};

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  var menu = JSON.parse(localStorage.getItem('menu')) || [];
  var allClickedDishes = [];

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
      localStorage.setItem("menu", JSON.stringify(menu));
    }else{
      for(var i = 0; i< menu.length ; i++){
        // compare all menu items to last item in clicked dish-list
        if (menu[i].title === dish.title){
          return;
        }
      }
      menu.push(dish);
      localStorage.setItem("menu", JSON.stringify(menu));
    }
    notifyObservers();
  }

  this.getFullMenu = function(){
    if(menu[0] != null){
      var storedMenu = JSON.parse(localStorage.getItem("menu"));
      if(storedMenu[0] != null){
        menu = storedMenu;
      }
    }
    return menu;
  }

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

  this.getDishes = function (options) {
    const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?'

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
