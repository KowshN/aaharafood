"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Calendar, Download } from "lucide-react"

export function WeeklyHealthReport() {
  const [currentWeek, setCurrentWeek] = useState("current")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {currentWeek === "current" ? "May 1 - May 7, 2023" : "April 24 - April 30, 2023"}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentWeek("previous")}
            disabled={currentWeek === "previous"}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous week</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentWeek("current")}
            disabled={currentWeek === "current"}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next week</span>
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download report</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="summary">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">Weekly Overview</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Avg. Calories</p>
                    <p className="font-medium">1,850</p>
                    <p className="text-xs text-green-600">-150 from goal</p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Protein</p>
                    <p className="font-medium">68g</p>
                    <p className="text-xs text-blue-600">92% of goal</p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Water</p>
                    <p className="font-medium">2.4L</p>
                    <p className="text-xs text-purple-600">80% of goal</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Health Metrics</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                    <span className="text-sm">Avg. Blood Sugar</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">118 mg/dL</span>
                      <span className="text-xs text-green-600">↓ 8</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                    <span className="text-sm">Avg. Blood Pressure</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">124/82</span>
                      <span className="text-xs text-amber-600">↔ 0</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                    <span className="text-sm">Weight</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-1">72.5 kg</span>
                      <span className="text-xs text-green-600">↓ 0.5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Achievements</h3>
                <div className="flex items-center p-3 bg-saffron-50 border border-saffron-200 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">5-Day Healthy Eating Streak</h4>
                    <p className="text-xs text-muted-foreground">
                      You've maintained balanced meals for 5 consecutive days!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Nutritional Breakdown</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Macronutrient Distribution</h4>
                  <div className="h-4 w-full rounded-full overflow-hidden flex">
                    <div className="h-full bg-blue-500" style={{ width: "25%" }}></div>
                    <div className="h-full bg-amber-500" style={{ width: "50%" }}></div>
                    <div className="h-full bg-green-500" style={{ width: "25%" }}></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>25% Protein</span>
                    <span>50% Carbs</span>
                    <span>25% Fat</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Top Foods Consumed</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                      <span className="text-sm">Whole Grains</span>
                      <span className="text-sm font-medium">7 servings</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                      <span className="text-sm">Leafy Greens</span>
                      <span className="text-sm font-medium">5 servings</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                      <span className="text-sm">Lentils & Beans</span>
                      <span className="text-sm font-medium">4 servings</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Nutritional Gaps</h4>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm">
                      Your diet is low in Vitamin D and Omega-3 fatty acids. Consider adding more fatty fish or
                      supplements.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Health Impact</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Blood Sugar Trend</h4>
                  <div className="h-20 bg-muted rounded-lg p-2 flex items-end space-x-1">
                    {[130, 125, 120, 122, 118, 115, 118].map((value, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-green-500 rounded-t"
                        style={{ height: `${((value - 100) / 50) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Meal Impact on Energy</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-sm">Breakfast</span>
                      <span className="text-sm font-medium text-green-600">High Energy</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <span className="text-sm">Lunch</span>
                      <span className="text-sm font-medium text-amber-600">Moderate Energy</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-sm">Dinner</span>
                      <span className="text-sm font-medium text-green-600">High Energy</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm">
                      Your current diet is showing positive effects on blood sugar control. Continue with high-fiber
                      meals and consider adding more protein to lunch.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
