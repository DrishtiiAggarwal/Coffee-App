type MenuType = {
  name: string;
  kcal: string;
  price: string;
  image: string;
};

const cafeMenu: Record<string, Record<string, MenuType[]>> = {
  "Veg": {
    "Sandwiches": [
      {
        name: "Grilled Cheese Sandwich",
        kcal: "320 kcal",
        price: "250",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Paneer Tikka Sandwich",
        kcal: "290 kcal",
        price: "270",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Veg Club Sandwich",
        kcal: "350 kcal",
        price: "300",
        image: "https://via.placeholder.com/100",
      },
    ],
    "Pasta": [
      {
        name: "Creamy Alfredo Pasta",
        kcal: "450 kcal",
        price: "350",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Penne Arrabiata",
        kcal: "400 kcal",
        price: "330",
        image: "https://via.placeholder.com/100",
      },
    ],
    "Pizza": [
      {
        name: "Margherita Pizza",
        kcal: "700 kcal",
        price: "400",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Veggie Delight Pizza",
        kcal: "750 kcal",
        price: "450",
        image: "https://via.placeholder.com/100",
      },
    ],
  },

  "Non-Veg": {
    "Chicken Delights": [
      {
        name: "Grilled Chicken Sandwich",
        kcal: "380 kcal",
        price: "320",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Chicken Tikka Wrap",
        kcal: "450 kcal",
        price: "350",
        image: "https://via.placeholder.com/100",
      },
    ],
    "Pasta": [
      {
        name: "Chicken Alfredo Pasta",
        kcal: "500 kcal",
        price: "400",
        image: "https://via.placeholder.com/100",
      },
    ],
    "Pizza": [
      {
        name: "BBQ Chicken Pizza",
        kcal: "850 kcal",
        price: "500",
        image: "https://via.placeholder.com/100",
      },
    ],
  },

  "Beverages": {
    "TWC SPECIALS": [
      {
        name: "Tiramisu Latte",
        kcal: "256 kcal",
        price: "355",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Mocha Toffee Nut Latte",
        kcal: "191 kcal",
        price: "309",
        image: "https://via.placeholder.com/100",
      },
    ],
    "CLASSICS": [
      {
        name: "Cappuccino",
        kcal: "150 kcal",
        price: "260",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Espresso",
        kcal: "5 kcal",
        price: "150",
        image: "https://via.placeholder.com/100",
      },
    ],
    "HOT TEAS": [
      {
        name: "English Breakfast Tea",
        kcal: "0 kcal",
        price: "200",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Green Tea",
        kcal: "0 kcal",
        price: "220",
        image: "https://via.placeholder.com/100",
      },
    ],
    "FRAPPE": [
      {
        name: "Java Chip Frappe",
        kcal: "380 kcal",
        price: "390",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Caramel Frappe",
        kcal: "420 kcal",
        price: "400",
        image: "https://via.placeholder.com/100",
      },
    ],
  },

  "Combo": {
    "Veg Combos": [
      {
        name: "Sandwich + Cappuccino",
        kcal: "480 kcal",
        price: "500",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Pasta + Lemonade",
        kcal: "600 kcal",
        price: "550",
        image: "https://via.placeholder.com/100",
      },
    ],
    "Non-Veg Combos": [
      {
        name: "Chicken Wrap + Coke",
        kcal: "700 kcal",
        price: "600",
        image: "https://via.placeholder.com/100",
      },
    ],
  },
};

export default cafeMenu;
