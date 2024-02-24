document.addEventListener('DOMContentLoaded', () => {
  displayCategories(); // Initialize categories view on page load
});

const data = [
  { category: "Aperitif", drinks: [ "Aperol Spritz", "Deja-Vu Tonic", "Hugo", "Lillet Wild Berry", "Lillet Rose White Peach", "Limoncello Spritz", "Mango Spritz" ] },
  { category: "Mocktails", drinks: [ "Erdbeer-Basilikum Mocktail", "Ipanema Mocktail", "Maracuja-Minz Mocktail", "Zitronen-Granatapfel Mocktail" ] },
  // Add more categories and drinks as needed
  { category: "Longdrinks", drinks: [ "Bacardi & Coke", "Gin & Tonic", "Hennessy & Cola", "Jack & Coke", "Jameson Ginger Ale", "Vodka & Energy", "Mojito", "Long Island Ice Tea", "Sex On The Beach" ] },
  
  { category: "Cîroc", drinks: [ "Pineapple Mojito Highball", "Pineapple Spritz", "Apple Mojito", "Red Berry Punch", "Cîroc & Tonic" ] },
  { category: "Wein & Secco", drinks: [ "Riesling", "Grauburgunder", "Sauvignon Blanc", "Chardonnay", "Gewürztraminer (Süß)", "Blanc de Noir", "Rosé", "Riesling/Roséschorle", "Dornfelder", "Heroldrebe (Lieblich)", "Spätburgunder", "Handschlag Cuvée", "Prosecco Villa Sandi" ] },
  { category: "Brauhaus Biere", drinks: [ "Helles", "Weizenbier", "Dunkel", "Saisonbier" ] },
  { category: "Shots & Liköre", drinks: [ "Berliner Luft", "Vodka", "Jägermeister", "Tequila-Silver/Gold", "Sambuca", "Baileys", "Ramazzotti", "Averna", "Fernet Menta / Branca", "Williams Christ-40% Vol.", "Mirabellenbrand-41% Vol.", "Keltenfeuer-52% Vol", "Cocos Rum-40% Vol", "Himbeer Geist-40% Vol.", "Moonshine Cranberry-50% Vol", "Moonshine Passion Fruit-40% Vol", "Mango-Chili Likör -20% Vol." ] },
  { category: "Non-Alcoholic", drinks: [ "Coca-Cola/Light/Zero", "Sprite", "Fanta", "Eistee Pfirsich / Zitrone", "Orangensaft", "Bitter Lemon", "Tonic Water", "Ginger Ale", "Orangina/Orangina Rouge", "Mineralwasser / Still", "Apfelsaft/Auch Naturtrüb", "Bananennektar", "Grapefruitsaft", "Johannisbeersaft", "Kirschsaft", "Maracujanektar", "Multivitaminnektar", "Orangensaft" ] },
  { category: 'Hot Drinks', drinks: ['Kaffe', 'Latte', 'Tea'] }
];


// Assuming drinksDetails array is structured similarly to your JSON data
const drinksDetails = [
  // Include the JSON data for drinks here, structured based on your requirements
  {
    "name": "Aperol Spritz",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "cocktails.jpg",
      "cocktails.jpg",
      "cocktails.jpg",
      "cocktails.jpg"
    ],
    "steps": [
      "Add ice to a glass.",
      "Squeeze lemon over the ice.",
      "Add berries on top.",
      "Stir gently and serve."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Deja-Vu Tonic",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "mint.jpg",
      "lime.jpg",
      "sugar.jpg",
      "rum.jpg",
      "soda.jpg"
    ],
    "steps": [
      "Muddle mint leaves and lime wedges with sugar in a glass.",
      "Fill the glass with ice cubes.",
      "Pour rum over the ice.",
      "Top up with soda water.",
      "Stir well and garnish with mint leaves."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Hugo",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "gin.jpg",
      "vermouth.jpg",
      "olive.jpg"
    ],
    "steps": [
      "Fill a mixing glass with ice cubes.",
      "Pour gin and vermouth into the glass.",
      "Stir well until chilled.",
      "Strain the mixture into a martini glass.",
      "Garnish with an olive and serve."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Lillet Wild Berry",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "tequila.jpg",
      "lime.jpg",
      "triple_sec.jpg",
      "salt.jpg"
    ],
    "steps": [
      "Rub the rim of a glass with lime and dip it in salt to coat.",
      "Fill the glass with ice cubes.",
      "Pour tequila and triple sec over the ice.",
      "Squeeze lime juice into the glass.",
      "Stir well and serve."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Lillet Rose White Peach",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "mint.jpg",
      "lime.jpg",
      "sugar.jpg",
      "rum.jpg",
      "soda.jpg"
    ],
    "steps": [
      "Muddle mint leaves and lime wedges with sugar in a glass.",
      "Fill the glass with ice cubes.",
      "Pour rum over the ice.",
      "Top up with soda water.",
      "Stir well and garnish with mint leaves."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Limoncello Spritz",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "gin.jpg",
      "vermouth.jpg",
      "olive.jpg"
    ],
    "steps": [
      "Fill a mixing glass with ice cubes.",
      "Pour gin and vermouth into the glass.",
      "Stir well until chilled.",
      "Strain the mixture into a martini glass.",
      "Garnish with an olive and serve."
    ],
    "productPicture": "juices.jpg"
  },
  {
    "name": "Mango Spritz",
    "mainPicture": "juices.jpg",
    "ingredients": [
      "cocktails.jpg",
      "cocktails.jpg",
      "cocktails.jpg",
      "cocktails.jpg"
    ],
    "steps": [
      "Rub the rim of a glass with lime and dip it in salt to coat.",
      "Fill the glass with ice cubes.",
      "Pour tequila and triple sec over the ice.",
      "Squeeze lime juice into the glass.",
      "Stir well and serve."
    ],
    "productPicture": "juices.jpg"
  }

];

let isShowingCategories = true; // Track the current view state

function displayCategories() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  data.forEach(categoryData => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category');
      categoryDiv.textContent = categoryData.category;
      container.appendChild(categoryDiv);

      categoryDiv.addEventListener('click', () => displayCategoryDetails(categoryData));
  });
  document.getElementById('category-details').style.display = 'none';
  document.getElementById('back-button').style.display = 'none';
  isShowingCategories = true;
}

function displayCategoryDetails(categoryData) {
  const detailsContainer = document.getElementById('category-details');
  detailsContainer.innerHTML = `<h2>${categoryData.category}</h2>`;
  const drinksList = document.createElement('ul');
  categoryData.drinks.forEach(drinkName => {
      createDrinkListItem(drinksList, drinkName);
  });
  detailsContainer.appendChild(drinksList);

  document.getElementById('categories-container').style.display = 'none';
  detailsContainer.style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
  isShowingCategories = false;
}

function displayDrinkDetails(drinkName) {
  const drinkDetail = drinksDetails.find(drink => drink.name === drinkName);
  if (!drinkDetail) {
      console.error("Drink not found:", drinkName);
      return;
  }

  // Building the drink details view
  const detailsContainer = document.getElementById('category-details');
  detailsContainer.innerHTML = buildDrinkDetailsHTML(drinkDetail);

  document.getElementById('categories-container').style.display = 'none';
  detailsContainer.style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
}

function displayAllDrinks() {
  const container = document.getElementById('categories-container');
  container.innerHTML = '';
  const list = document.createElement('ul');
  list.className = 'simple-drinks-list';

  const drinksSet = new Set(data.flatMap(category => category.drinks));
  Array.from(drinksSet).sort().forEach(drinkName => {
      createDrinkListItem(list, drinkName);
  });

  container.appendChild(list);
  document.getElementById('category-details').style.display = 'none';
  container.style.display = 'block';
  document.getElementById('back-button').style.display = 'block';
  isShowingCategories = false;
}

document.getElementById('back-button').addEventListener('click', displayCategories);

document.getElementById('toggle-view-button').addEventListener('click', () => {
  if (isShowingCategories) {
      displayAllDrinks();
  } else {
      displayCategories();
  }
});

// Helper function to create a list item for a drink
function createDrinkListItem(list, drinkName) {
  const drinkItem = document.createElement('li');
  const drinkLink = document.createElement('a');
  drinkLink.textContent = drinkName;
  drinkLink.href = "javascript:void(0);";
  drinkLink.addEventListener('click', () => displayDrinkDetails(drinkName));
  drinkItem.appendChild(drinkLink);
  list.appendChild(drinkItem);
}

// Helper function to build HTML for drink details
function buildDrinkDetailsHTML(drinkDetail) {
  let html = `<h2>${drinkDetail.name}</h2><img src="images/${drinkDetail.mainPicture}" alt="${drinkDetail.name}" style="width:100%;">`;
  html += '<h3>Ingredients:</h3><div>';
  drinkDetail.ingredients.forEach(ingredient => {
      html += `<img src="images/${ingredient}" alt="Ingredient" style="width:50px; height:50px; border-radius:50%; margin: 5px;"> `;
  });
  html += '</div><h3>Steps:</h3><ol>';
  drinkDetail.steps.forEach(step => {
      html += `<li>${step}</li>`;
  });
  html += `</ol><img src="images/${drinkDetail.productPicture}" alt="${drinkDetail.name} Product" style="width:100%;">`;
  return html;
}
