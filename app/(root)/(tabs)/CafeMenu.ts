type MenuType = {
  name: string;
  kcal: string;
  price: string;
  image: any;
};

const images={
  grilledCheeseSandwitch: require("@/assets/images/Grilled Cheese Sandwich.png"),
  paneerTikkaSandwitch: require("@/assets/images/Paneer Tikka Sandwich.png"),
  vegClubSandwitch: require("@/assets/images/Veg Club Sandwich.png"),
  creamyAlfredoPasta: require("@/assets/images/Creamy Alfredo Pasta.png"),
  penneArrabiata: require("@/assets/images/Penne Arrabiata.png"),
  margheritaPizza: require("@/assets/images/Margherita Pizza.png"),
  veggieDelightPizza: require("@/assets/images/Veggie Delight Pizza.png"),
  grilledChickenSandwich: require("@/assets/images/Grilled Chicken Sandwich.png"),
  chickenTikkaWrap: require("@/assets/images/Chicken Tikka Wrap.png"),
  chickenAlfredoPasta: require("@/assets/images/Chicken Alfredo Pasta.png"),
  bbqChickenPizza: require("@/assets/images/BBQ Chicken Pizza.png"),
  tiramisuLatte: require("@/assets/images/Tiramisu Latte.png"),
  mochaToffeeNutLatte: require("@/assets/images/Mocha Toffee Nut Latte.png"),
  cappuccino: require("@/assets/images/Cappuccino.png"),
  espresso: require("@/assets/images/Espresso.png"),
  englishBreakfastTea: require("@/assets/images/English Breakfast Tea.png"),
  greenTea: require("@/assets/images/Green Tea.png"),
  javaChipFrappe: require("@/assets/images/Java Chip Frappe.png"),
  caramelFrappe: require("@/assets/images/Caramel Frappe.png"),
  mochaChocoChipFrappé: require("@/assets/images/mochaChocoChipFrappé.png"),
  sandwichCappuccino: require("@/assets/images/SandwichCappuccino.png"),
  pastaLemonade: require("@/assets/images/PastaLemonade.png"),
  chickenWrapCoke: require("@/assets/images/Chicken Wrap Coke.png"),
}

const cafeMenu: Record<string, Record<string, MenuType[]>> = {
  "Veg": {
    "Sandwiches": [
      {
        name: "Grilled Cheese Sandwich",
        kcal: "320 kcal",
        price: "250",
        image: images.grilledCheeseSandwitch,
      },
      {
        name: "Paneer Tikka Sandwich",
        kcal: "290 kcal",
        price: "270",
        image: images.paneerTikkaSandwitch,
      },
      {
        name: "Veg Club Sandwich",
        kcal: "350 kcal",
        price: "300",
        image: images.vegClubSandwitch,
      },
    ],
    "Pasta": [
      {
        name: "Creamy Alfredo Pasta",
        kcal: "450 kcal",
        price: "350",
        image: images.creamyAlfredoPasta,
      },
      {
        name: "Penne Arrabiata",
        kcal: "400 kcal",
        price: "330",
        image: images.penneArrabiata,
      },
    ],
    "Pizza": [
      {
        name: "Margherita Pizza",
        kcal: "700 kcal",
        price: "400",
        image: images.margheritaPizza,
      },
      {
        name: "Veggie Delight Pizza",
        kcal: "750 kcal",
        price: "450",
        image: images.veggieDelightPizza,
      },
    ],
  },

  "Non-Veg": {
    "Chicken Delights": [
      {
        name: "Grilled Chicken Sandwich",
        kcal: "380 kcal",
        price: "320",
        image: images.grilledChickenSandwich,
      },
      {
        name: "Chicken Tikka Wrap",
        kcal: "450 kcal",
        price: "350",
        image: images.chickenTikkaWrap,
      },
    ],
    "Pasta": [
      {
        name: "Chicken Alfredo Pasta",
        kcal: "500 kcal",
        price: "400",
        image: images.chickenAlfredoPasta,
      },
    ],
    "Pizza": [
      {
        name: "BBQ Chicken Pizza",
        kcal: "850 kcal",
        price: "500",
        image: images.bbqChickenPizza,
      },
    ],
  },

  "Beverages": {
    "TWC SPECIALS": [
      {
        name: "Tiramisu Latte",
        kcal: "256 kcal",
        price: "355",
        image: images.tiramisuLatte,
      },
      {
        name: "Mocha Toffee Nut Latte",
        kcal: "191 kcal",
        price: "309",
        image: images.mochaToffeeNutLatte,
      },
    ],
    "CLASSICS": [
      {
        name: "Cappuccino",
        kcal: "150 kcal",
        price: "260",
        image: images.cappuccino,
      },
      {
        name: "Espresso",
        kcal: "5 kcal",
        price: "150",
        image: images.espresso,
      },
    ],
    "HOT TEAS": [
      {
        name: "English Breakfast Tea",
        kcal: "0 kcal",
        price: "200",
        image: images.englishBreakfastTea,
      },
      {
        name: "Green Tea",
        kcal: "0 kcal",
        price: "220",
        image: images.greenTea,
      },
    ],
    "FRAPPE": [
      {
        name: "Java Chip Frappe",
        kcal: "380 kcal",
        price: "390",
        image: images.javaChipFrappe,
      },
      {
        name: "Caramel Frappe",
        kcal: "420 kcal",
        price: "400",
        image: images.caramelFrappe,
      },
      {
        name: "Mocha Choco Chip Frappé",
        kcal: "400 kcal",
        price: "400",
        image: images.mochaChocoChipFrappé,
      },
    ],
  },

  "Combo": {
    "Veg Combos": [
      {
        name: "Sandwich + Cappuccino",
        kcal: "480 kcal",
        price: "500",
        image: images.sandwichCappuccino,
      },
      {
        name: "Pasta + Lemonade",
        kcal: "600 kcal",
        price: "550",
        image: images.pastaLemonade,
      },
    ],
    "Non-Veg Combos": [
      {
        name: "Chicken Wrap + Coke",
        kcal: "700 kcal",
        price: "600",
        image: images.chickenWrapCoke,
      },
    ],
  },
};

export default cafeMenu;
