interface Subcategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export const productCategories: Category[] = [
  {
    id: "1",
    name: "Fruits",
    subcategories: [
      { id: "1a", name: "Apples" },
      { id: "1b", name: "Bananas" },
      { id: "1c", name: "Oranges" },
      { id: "1d", name: "Grapes" },
      { id: "1e", name: "Mangoes" },
      { id: "1f", name: "Pineapples" },
      { id: "1g", name: "Berries (strawberries, blueberries, raspberries)" },
      { id: "1h", name: "Watermelons" },
      { id: "1i", name: "Papayas" }
    ]
  },
  {
    id: "2",
    name: "Vegetables",
    subcategories: [
      { id: "2a", name: "Leafy greens (spinach, lettuce, kale)" },
      { id: "2b", name: "Tomatoes" },
      { id: "2c", name: "Peppers (bell peppers, chili peppers)" },
      { id: "2d", name: "Carrots" },
      { id: "2e", name: "Broccoli" },
      { id: "2f", name: "Cauliflower" },
      { id: "2g", name: "Cucumbers" },
      { id: "2h", name: "Onions" }
    ]
  },
  {
    id: "3",
    name: "Herbs and Spices",
    subcategories: [
      { id: "3a", name: "Basil" },
      { id: "3b", name: "Parsley" },
      { id: "3c", name: "Mint" },
      { id: "3d", name: "Rosemary" },
      { id: "3e", name: "Thyme" },
      { id: "3f", name: "Cilantro" },
      { id: "3g", name: "Oregano" },
      { id: "3h", name: "Salt" },
      { id: "3i", name: "Pepper" },
      { id: "3j", name: "Olive oil" },
      { id: "3k", name: "Spices (cumin, turmeric, cinnamon)" }
    ]
  },
  {
    id: "4",
    name: "Root Crops",
    subcategories: [
      { id: "4a", name: "Potatoes" },
      { id: "4b", name: "Sweet potatoes" },
      { id: "4c", name: "Cassava" },
      { id: "4d", name: "Yams" }
    ]
  },
  {
    id: "5",
    name: "Legumes",
    subcategories: [
      { id: "5a", name: "Beans (black beans, kidney beans, pinto beans)" },
      { id: "5b", name: "Lentils" },
      { id: "5c", name: "Chickpeas" },
      { id: "5d", name: "Peas" }
    ]
  },
  {
    id: "6",
    name: "Grains",
    subcategories: [
      { id: "6a", name: "Rice" },
      { id: "6b", name: "Millet" },
      { id: "6c", name: "Quinoa" },
      { id: "6d", name: "Oats" }
    ]
  },
  {
    id: "7",
    name: "Nuts and Seeds",
    subcategories: [
      { id: "7a", name: "Almonds" },
      { id: "7b", name: "Cashews" },
      { id: "7c", name: "Peanuts" },
      { id: "7d", name: "Sunflower seeds" },
      { id: "7e", name: "Pumpkin seeds" }
    ]
  },
  {
    id: "8",
    name: "Dairy and Eggs",
    subcategories: [
      { id: "8a", name: "Eggs" },
      { id: "8b", name: "Cheese (wara)" }
    ]
  },
  {
    id: "9",
    name: "Meat and Poultry",
    subcategories: [
      { id: "9a", name: "Chicken" },
      { id: "9b", name: "Beef" },
      { id: "9c", name: "Pork" },
      { id: "9d", name: "Fish (salmon, tilapia, catfish)" }
    ]
  },
  {
    id: "10",
    name: "Bakery and Staples",
    subcategories: [
      { id: "10a", name: "Bread" },
      { id: "10b", name: "Flour" },
      { id: "10c", name: "Pasta" },
      { id: "10d", name: "Rice" }
    ]
  },
  {
    id: "11",
    name: "Organic and Health Foods",
    subcategories: [
      { id: "11a", name: "Organic produce" },
      { id: "11b", name: "Health-focused products" }
    ]
  }
];
