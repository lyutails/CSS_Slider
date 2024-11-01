// potions

const beer = document.getElementById("beer");
const eggplant = document.getElementById("eggplant");
const mushroom = document.getElementById("mushroom");
const broccoli = document.getElementById("broccoli");
const pumpkin = document.getElementById("pumpkin");
const cookies = document.getElementById("cookies");
const apple = document.getElementById("apple");
const carrot = document.getElementById("carrot");
const blueberries = document.getElementById("blueberries");
const pink_water = document.getElementById("pink_water");
const garlic = document.getElementById("garlic");
const salad = document.getElementById("salad");
const tulip = document.getElementById("tulip");
const grapes = document.getElementById("grapes");
const acorn = document.getElementById("acorn");
const cat = document.getElementById("cat");
const potion = document.getElementById("potion");

const fruitsForPotion = [tulip, mushroom, apple, blueberries, pink_water];

fruitsForPotion.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none";
    fruitsForPotion.pop();

    if (fruitsForPotion.length === 0) {
      cat.style.backgroundImage =
        'url("./references/4_potions/black-cat_after_sushi.svg")';
      potion.style.visibility = "visible";
    }
  });
});

// gathering

const hedgehog = document.getElementById("hedgehog");
const appleGather = document.getElementById("appleGather");
const mushrooms = document.getElementById("mushrooms");
const maple_leaf = document.getElementById("maple_leaf");
const marshmallow = document.getElementById("marshmallow");
const sock = document.getElementById("sock");
const acornGather = document.getElementById("acornGather");
const house = document.getElementById("house");

const itemsToGather = [
  appleGather,
  mushrooms,
  maple_leaf,
  marshmallow,
  sock,
  acornGather,
];

itemsToGather.forEach((item) => {
  item.addEventListener("click", () => {
    if (item?.style.opacity === 0) {
      itemsToGather.pop();
      console.log(item);

      itemsToGather.length === 0
        ? house.style.opacity === 1
        : house.style.opacity === 0;
    }
  });
});
