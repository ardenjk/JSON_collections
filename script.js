let content;
let restaurantBlock;

let restaurantNames = [
  {
    "restaurantName": "Mokyo",
    "location": "NYC",
    "cuisine": "Korean Tapas",
        "bestDish": "Corn Dumpling",
    "image": "mokyo.jpeg"
  },
  {
    "restaurantName": "Jeju Noodle Bar",
    "location": "NYC",
    "cuisine": "Korean Fusion",
        "bestDish": "Toro Sambap",
    "image": "jeju.jpeg"
  },
  {
    "restaurantName": "Jungsik",
    "location": "NYC",
    "cuisine": "Modern Korean",
        "bestDish": "Signature Menu",
    "image": "Jungsik.jpeg"
  },
  {
    "restaurantName": "Lucali",
    "location": "NYC",
    "cuisine": "Italian",
        "bestDish": "Pizza",
    "image": "lucali.jpeg"
  },
  ];

function createPage() {
  content = document.getElementById('content');

  for (let restaurant of restaurantNames) {
    restaurantBlock = document.createElement('div');
    restaurantBlock.className = 'restaurantBlock'; 
        restaurantBlock.setAttribute('data-aos', 'zoom-in-up');

    let resturantSquare = document.createElement('img');
    resturantSquare.className = 'resturantSquare';
    resturantSquare.src = restaurant.image;
      restaurantBlock.appendChild(resturantSquare);

      let restauranLabel = document.createElement('h1');
    movieTitle.textContent = restaurant.restaurantName;
      restaurantBlock.appendChild(restauranLabel);

        let restaurantCuisine = document.createElement('h2');
    songComposer.textContent = "Composer: " + restaurant.cuisine;
      restaurantBlock.appendChild(restaurantCuisine);

        let bestDish = document.createElement('p');
    bestDish.textContent = "Must Try: " + movie.bestDish;
      restaurantBlock.appendChild(bestDish);

      let location = document.createElement('p');
  location.textContent = restaurant.location;
      restaurantBlock.appendChild(location);

    content.appendChild(restaurantBlock);
  }
}

createPage(); 
AOS.init();