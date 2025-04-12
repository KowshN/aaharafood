"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Flame, Plus, X, Search, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample ingredient categories
const ingredientCategories = [
  {
    name: "Vegetables",
    items: [
      "Tomato",
      "Onion",
      "Potato",
      "Spinach",
      "Carrot",
      "Bell Pepper",
      "Cauliflower",
      "Broccoli",
      "Cabbage",
      "Eggplant",
      "Okra",
      "Peas",
    ],
  },
  {
    name: "Fruits",
    items: [
      "Apple",
      "Banana",
      "Orange",
      "Mango",
      "Papaya",
      "Pineapple",
      "Watermelon",
      "Grapes",
      "Pomegranate",
      "Guava",
      "Lemon",
    ],
  },
  {
    name: "Grains",
    items: ["Rice", "Wheat Flour", "Oats", "Quinoa", "Barley", "Millet", "Ragi", "Jowar", "Bajra", "Semolina", "Corn"],
  },
  {
    name: "Proteins",
    items: [
      "Chicken",
      "Fish",
      "Eggs",
      "Tofu",
      "Paneer",
      "Chickpeas",
      "Lentils",
      "Kidney Beans",
      "Black Beans",
      "Peanuts",
      "Almonds",
    ],
  },
  {
    name: "Dairy",
    items: ["Milk", "Yogurt", "Cheese", "Butter", "Ghee", "Cream", "Cottage Cheese", "Buttermilk"],
  },
  {
    name: "Spices",
    items: [
      "Turmeric",
      "Cumin",
      "Coriander",
      "Garam Masala",
      "Chili Powder",
      "Black Pepper",
      "Cardamom",
      "Cinnamon",
      "Cloves",
      "Mustard Seeds",
    ],
  },
]

// Sample recipe suggestions based on ingredients
const sampleRecipes = [
  {
    id: 1,
    name: "Mixed Vegetable Curry",
    ingredients: ["Tomato", "Onion", "Potato", "Peas", "Turmeric", "Garam Masala"],
    prepTime: "30 mins",
    calories: 250,
    image: "/placeholder.svg?height=150&width=250",
    healthTags: ["Vegetarian", "Low-Fat", "High-Fiber"],
    suitableFor: ["Diabetes", "Heart Health", "Weight Management"],
  },
  {
    id: 2,
    name: "Spinach and Paneer Wrap",
    ingredients: ["Spinach", "Paneer", "Wheat Flour", "Onion", "Cumin", "Yogurt"],
    prepTime: "20 mins",
    calories: 320,
    image: "/placeholder.svg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Protein", "Iron-Rich"],
    suitableFor: ["Diabetes", "Pregnancy", "Fitness"],
  },
  {
    id: 3,
    name: "Oats and Fruit Porridge",
    ingredients: ["Oats", "Apple", "Banana", "Milk", "Cinnamon", "Almonds"],
    prepTime: "15 mins",
    calories: 280,
    image: "/placeholder.svg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Fiber", "Heart-Healthy"],
    suitableFor: ["Heart Health", "Weight Management", "Cholesterol Control"],
  },
  {
    id: 4,
    name: "Lentil and Vegetable Soup",
    ingredients: ["Lentils", "Carrot", "Onion", "Tomato", "Cumin", "Black Pepper"],
    prepTime: "40 mins",
    calories: 220,
    image: "/placeholder.svg?height=150&width=250",
    healthTags: ["Vegetarian", "High-Protein", "Low-Fat"],
    suitableFor: ["Diabetes", "Weight Management", "Immunity"],
  },
]

export function FridgeRecipeFinder() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [recipes, setRecipes] = useState([])
  const [activeTab, setActiveTab] = useState("select")
  const [healthCondition, setHealthCondition] = useState("all")

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient))
  }

  const findRecipes = () => {
    // In a real app, this would call an API with the selected ingredients
    // For now, we'll filter the sample recipes based on matching ingredients
    if (selectedIngredients.length === 0) {
      setRecipes([])
      return
    }

    const filteredRecipes = sampleRecipes.filter((recipe) => {
      // Check if recipe contains at least 2 of the selected ingredients
      const matchingIngredients = recipe.ingredients.filter((ingredient) => selectedIngredients.includes(ingredient))
      return matchingIngredients.length >= 2
    })

    // Further filter by health condition if selected
    const healthFiltered =
      healthCondition === "all"
        ? filteredRecipes
        : filteredRecipes.filter((recipe) =>
            recipe.suitableFor.some((condition) => condition.toLowerCase().includes(healthCondition.toLowerCase())),
          )

    setRecipes(healthFiltered)
    setActiveTab("recipes")
  }

  const filteredIngredients = (category) => {
    return category.items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Search className="mr-2 h-5 w-5 text-orange-500" />
          What's in My Fridge?
        </CardTitle>
        <CardDescription>Select ingredients you have and get personalized healthy recipe suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="select">Select Ingredients</TabsTrigger>
            <TabsTrigger value="recipes" disabled={recipes.length === 0}>
              Recipe Suggestions ({recipes.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="select" className="space-y-4">
            <div className="flex flex-wrap gap-2 min-h-[60px] p-3 bg-gray-50 rounded-md">
              {selectedIngredients.length === 0 ? (
                <p className="text-sm text-muted-foreground">Select ingredients below or search for them</p>
              ) : (
                selectedIngredients.map((ingredient) => (
                  <Badge key={ingredient} className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1">
                    {ingredient}
                    <button
                      className="ml-1 text-orange-800 hover:text-orange-900"
                      onClick={() => removeIngredient(ingredient)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))
              )}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={findRecipes}
                className="bg-orange-500 hover:bg-orange-600"
                disabled={selectedIngredients.length === 0}
              >
                Find Recipes
              </Button>
            </div>

            <div className="space-y-4 mt-4">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "all" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("all")}
                >
                  All Recipes
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "diabetes" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("diabetes")}
                >
                  Diabetes-Friendly
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "heart" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("heart")}
                >
                  Heart-Healthy
                </Badge>
                <Badge
                  variant="outline"
                  className={`cursor-pointer ${healthCondition === "weight" ? "bg-orange-100 text-orange-800" : ""}`}
                  onClick={() => setHealthCondition("weight")}
                >
                  Weight Management
                </Badge>
              </div>

              {ingredientCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="font-medium mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {filteredIngredients(category).map((ingredient) => (
                      <Badge
                        key={ingredient}
                        variant="outline"
                        className={`cursor-pointer ${
                          selectedIngredients.includes(ingredient) ? "bg-orange-100 text-orange-800" : ""
                        }`}
                        onClick={() =>
                          selectedIngredients.includes(ingredient)
                            ? removeIngredient(ingredient)
                            : addIngredient(ingredient)
                        }
                      >
                        {ingredient}
                        {!selectedIngredients.includes(ingredient) && <Plus className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipes">
            {recipes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recipes found with your ingredients.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Try selecting different ingredients or fewer health restrictions.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {recipes.map((recipe) => (
                  <Card key={recipe.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                      <div>
                        <img
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{recipe.name}</h3>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {recipe.healthTags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-green-50">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {recipe.prepTime}
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4" />
                            {recipe.calories} cal
                          </div>
                        </div>

                        <Separator className="my-3" />

                        <div>
                          <h4 className="font-medium text-sm">Ingredients:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {recipe.ingredients.map((ingredient) => (
                              <Badge
                                key={ingredient}
                                className={
                                  selectedIngredients.includes(ingredient)
                                    ? "bg-orange-100 text-orange-800"
                                    : "bg-gray-100"
                                }
                              >
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3">
                          <h4 className="font-medium text-sm">Good for:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {recipe.suitableFor.map((condition) => (
                              <Badge key={condition} variant="outline" className="bg-blue-50 text-blue-700">
                                {condition}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="mt-3 bg-orange-500 hover:bg-orange-600" size="sm">
                          View Full Recipe
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
