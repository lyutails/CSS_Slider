// dino

const dinoCake = document.getElementById("dino_cake");
const moveButton = document.getElementById("moving");
const obstacles = document.getElementById("obstacle_wrapper");
const moveButtonLabel = document.getElementById("moving_label");
const jumpButtonLeft = document.getElementById("jump_left");
const jumpButtonRight = document.getElementById("jump_right");
const obstacleOne = document.getElementById("obstacle_one");
const obstacleTwo = document.getElementById("obstacle_two");
const obstacleThree = document.getElementById("obstacle_three");
const obstacleFour = document.getElementById("obstacle_four");
const obstacleFive = document.getElementById("obstacle_five");
const obstacleSix = document.getElementById("obstacle_six");
const obstacleSeven = document.getElementById("obstacle_seven");
const dino = document.getElementById("dino");

let timesJumped = 0;

moveButton.addEventListener("change", () => {
  jumpButtonLeft.addEventListener("click", () => {
    timesJumped++;
  });
  jumpButtonRight.addEventListener("click", () => {
    timesJumped++;
  });
  if (moveButton.checked) {
    setTimeout(() => {
      if (timesJumped === 7) {
        obstacles.style.display = "none";
        dinoCake.classList.add("show");
        moveButton.setAttribute("disabled", "true");
        moveButtonLabel.style.backgroundColor = "lightgrey";
        moveButtonLabel.style.borderRadius = "10px";
        moveButtonLabel.style.userSelect = "none";
      }
    }, 40000);
  }
});

dinoCake.addEventListener("click", () => {
  setTimeout(() => {
    dinoCake.classList.remove("show");
    dinoCake.classList.add("yum");
  }, 1000);
});

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
    itemsToGather.pop();

    itemsToGather.length === 0
      ? (house.style.display = "block")
      : (house.style.display = "none");

    if (itemsToGather.length === 0) {
      setTimeout(() => {
        hedgehog.style.visibility = "hidden";
      }, "3000");
    }
  });
});

// fireflies

const fireflies = document.querySelectorAll(".firefly");
const flyButton = document.getElementById("fly_radio");
const fireflyOne = document.getElementById("firefly_one");
const fireflyTwo = document.getElementById("firefly_two");
const fireflyThree = document.getElementById("firefly_three");
const fireflyFour = document.getElementById("firefly_four");
const fireflyFive = document.getElementById("firefly_five");
const fireflySix = document.getElementById("firefly_six");
const fireflySeven = document.getElementById("firefly_seven");
const jar = document.getElementById("jar");

flyButton.addEventListener("change", () => {
  if (flyButton.checked) {
    fireflies.forEach((element) => {
      element.style.animation = "move_anim1 10s alternate";
      element.style.animationIterationCount = "1";
    });
  }
});

const firefliesArray = [
  fireflyOne,
  fireflyTwo,
  fireflyThree,
  fireflyFour,
  fireflyFive,
  fireflySix,
  fireflySeven,
];

const firefliesRainbowArray = [
  fireflyThree,
  fireflyTwo,
  fireflyOne,
  fireflySeven,
  fireflySix,
  fireflyFive,
  fireflyFour,
];

const firefliesEmptyArray = [];

firefliesArray.forEach((element) => {
  element?.addEventListener("click", () => {
    firefliesEmptyArray.push(element);
    if (
      firefliesEmptyArray.length === firefliesRainbowArray.length &&
      firefliesEmptyArray.every((elem, i) => elem === firefliesRainbowArray[i])
    ) {
      jar.style.animationName = "jar_anim_still";
      jar.style.backgroundImage = `url("./references/2_firefly_pics/jar_rainbow.png")`;
    }
  });
});

// gems

let matchCounter = 0;

const gems = document.getElementsByClassName("gem_card");
const shapes = document.getElementsByClassName("shape_card");
const gemAmethyst = document.getElementById("gem_amethyst");
const gemSapphire = document.getElementById("gem_sapphire");
const gemDiamond = document.getElementById("gem_diamond");
const gemEmerald = document.getElementById("gem_emerald");
const gemRuby = document.getElementById("gem_ruby");
const gemAmetrin = document.getElementById("gem_ametrin");
const shapeAmethyst = document.getElementById("shape_amethyst");
const shapeRuby = document.getElementById("shape_ruby");
const shapeEmerald = document.getElementById("shape_emerald");
const shapeAmetrin = document.getElementById("shape_ametrin");
const shapeSapphire = document.getElementById("shape_sapphire");
const shapeDiamond = document.getElementById("shape_diamond");

const gemsArray = [
  gemAmethyst,
  gemSapphire,
  gemDiamond,
  gemEmerald,
  gemRuby,
  gemAmetrin,
];

const shapesArray = [
  shapeAmethyst,
  shapeSapphire,
  shapeDiamond,
  shapeEmerald,
  shapeRuby,
  shapeAmetrin,
];

gemsArray.forEach((gem) => {
  gem.setAttribute("draggable", "true");
});

shapesArray.forEach((shape) => {
  shape.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});

function dragEvent(e) {
  e.dataTransfer.setData("text", e.target.id);
}

gemsArray.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    dragEvent(e);
  });
});

function dropEvent(e, shapeData) {
  e.preventDefault();
  const gemData = e.dataTransfer.getData("text");
  const gemName = gemData.slice(4);
  const shapeName = shapeData.slice(6);
  if (gemName === shapeName) {
    const gem = document.getElementById(gemData);
    const shape = document.getElementById(shapeData);
    shape.appendChild(gem);
    gem.style.position = "absolute";
    gem.style.width = "100%";
    matchCounter++;
  }
  if (matchCounter === 6) {
    const gemsOverlay = document.createElement("div");
    gemsOverlay.classList.add("gems_overlay");
    document.body.appendChild(gemsOverlay);
    const dialog = document.createElement("dialog");
    dialog.setAttribute("open", "true");
    dialog.textContent = "match === win win ^^";
    document.body.appendChild(dialog);
    dialog.classList.add("gems_dialog");
    const dialogPic = document.createElement("div");
    dialogPic.classList.add("gem_dialog_pic");
    dialog.appendChild(dialogPic);
    const gemsCross = document.createElement("div");
    gemsCross.classList.add("gems_cross");
    dialog.appendChild(gemsCross);
    gemsOverlay.addEventListener("click", () => {
      gemsOverlay.remove();
      dialog.remove();
    });
    gemsCross.addEventListener("click", () => {
      gemsOverlay.remove();
      dialog.remove();
    });
  }
}

shapesArray.forEach((item, i) => {
  item.addEventListener("drop", (e) => {
    dropEvent(e, item.id);
  });
});

// heart

const yarnString = document.getElementById("yarn_string");
const yarn = document.getElementById("yarn");
const heart = document.getElementById("heart_shape");
const heartBeat = new Audio("./references/7_heart/heartbeat_sound.mp3");

yarnString.addEventListener("click", () => {
  yarn.style.visibility = "visible";
  yarnString.style.display = "none";
  heart.style.animationPlayState = "running";
  heartBeat.play();
});
