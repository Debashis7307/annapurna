export type Recipe = {
  id: string
  title: string
  diet: "Any" | "Vegetarian" | "Vegan" | "Gluten-Free" | "Keto"
  time: number
  calories: number
  tags: string[]
  image: string
}

export const mockRecipes: Recipe[] = [
  {
    id: "r1",
    title: "15‑Min Lemon Garlic Chickpeas",
    diet: "Vegan",
    time: 15,
    calories: 420,
    tags: ["quick", "pantry", "high-protein"],
    image: "/lemon-garlic-chickpeas-bowl.png",
  },
  {
    id: "r2",
    title: "Creamy Spinach Pasta",
    diet: "Vegetarian",
    time: 20,
    calories: 540,
    tags: ["comfort", "one-pot"],
    image: "/creamy-spinach-pasta.png",
  },
  {
    id: "r3",
    title: "Herbed Grilled Chicken",
    diet: "Keto",
    time: 25,
    calories: 380,
    tags: ["grill", "low-carb", "high-protein"],
    image: "/hchecken.jpg",
  },
  {
    id: "r4",
    title: "Zesty Quinoa Salad",
    diet: "Gluten-Free",
    time: 18,
    calories: 320,
    tags: ["fresh", "meal-prep"],
    image: "/salad.jpg",
  },
  {
    id: "r5",
    title: "Coconut Lentil Curry",
    diet: "Vegan",
    time: 30,
    calories: 560,
    tags: ["curry", "comfort"],
    image: "/carry.jpg",
  },
  {
    id: "r6",
    title: "Halloumi Veggie Wraps",
    diet: "Vegetarian",
    time: 15,
    calories: 450,
    tags: ["wraps", "quick", "lunch"],
    image: "/veg.jpg",
  },
]
