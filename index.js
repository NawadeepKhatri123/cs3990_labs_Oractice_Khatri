const recipes = [
  {
    dish: "Picadillo Cornbread Casserole",
    category: "Dinner",
    image: "1.jpg",
    descr: "This lively picadillo cornbread casserole hits the spot and is the perfect vehicle to combine in a savory, cheesy base under-baked cornbread. lorem10 lorem10 lorem10 lorem10"
  },
  {
    dish: "Tomato Soup and Grilled Cheese Casserole",
    category: "Dinner",
    image: "2.jpg",
     descr: "This tomato soup and grilled cheese casserole tastes like the classic combo: campy, golden, melty, and delicious. lorem20 lorem20 lorem20 lorem20"
  },
  {
    dish: "Cream Cheese and Peanut Butter Strawberry Sandwich",
    category: "Sandwiches",
    image: "3.jpg",
    descr: "This cream cheese and peanut butter strawberry sandwich takes a classic combo somewhere fun. lorem30 lorem30 lorem30 lorem30"
  }
];

// Category class
class Category {
  constructor(category) {
    this.category = category;
  }

  render() {
    const btn = document.createElement('button');
    btn.textContent = this.category;
    btn.setAttribute('data-category', this.category);
    btn.style.margin = '5px';
    btn.style.padding = '8px 12px';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.backgroundColor = '#f6c27a';
    btn.style.transition = 'all 0.2s ease-in-out';
    return btn;
  }
}

// Dish class
class Dish {
  constructor({ dish, image, descr }) {
    this.dish = dish;
    this.image = image;
    this.descr = descr;
  }

  render() {
    const section = document.createElement('section');
    section.style.backgroundColor = "#f6c27a";
    section.style.marginBottom = "12px";
    section.style.padding = "10px";
    section.innerHTML = `
      <h3>${this.dish}</h3>
      <img src="${this.image}" width="200"><br>
      <p>${this.descr}</p>
    `;
    return section;
  }
}



//dishDesc background color and padding
const dishDesc = document.getElementById('dishDesc');
dishDesc.style.backgroundColor = '#f6c27a';
dishDesc.style.padding = '10px';


// Style the panel background
const dishPanel = document.getElementById('dishPanel');
dishPanel.style.backgroundColor = '#fceec0';
dishPanel.style.padding = '10px';

// Render unique categories
const uniqueCategories = [];
recipes.forEach(recipe => {
  if (!uniqueCategories.includes(recipe.category)) {
    uniqueCategories.push(recipe.category);
    const cat = new Category(recipe.category);
    const btn = cat.render();
    dishPanel.appendChild(btn);
  }
});

// Event delegation
$('#dishPanel').on('click', 'button', function () {
  const selected = $(this).data('category');

  // Remove highlight if unclick 
  $('#dishPanel button').css({
    boxShadow: 'none',
    backgroundColor: '#f6c27a'
  });

  // Highlight if button clicked
  $(this).css({
    boxShadow: '5px 8px darkgreen',
    backgroundColor: '#f6c27a'
  });

  // Clear previous dishes
  $('#dishDesc').empty();

  // Add new dishes
  recipes
    .filter(r => r.category === selected)
    .forEach(recipe => {
      const dish = new Dish(recipe);
      $('#dishDesc').append(dish.render());
    });
}); 
