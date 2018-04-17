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

  // API Calls

  this.addDishToMenu = function(){
    // vill plocka ut image, titel, preparation, pris från onedish.js och spara dem här i en lista som json-objekt.
    alert("hej");
    notifyObservers();
  }

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

    console.log(url);

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
