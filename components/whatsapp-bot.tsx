"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Check, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true)
      setTimeout(() => {
        setStep(2)
      }, 1500)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 rounded-full p-4 shadow-lg bg-neem-500 hover:bg-neem-600 text-white"
        size="icon"
        aria-label="WhatsApp Bot"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 z-50"
          >
            <Card className="w-80 sm:w-96 shadow-xl border-neem-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-neem-500 to-neem-600 text-white py-3 px-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Aahara WhatsApp Bot
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="bg-neem-50 p-3 rounded-lg">
                      <p className="text-sm">Connect with our WhatsApp bot to get:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-neem-500 mr-2" />
                          <span>Daily meal reminders</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-neem-500 mr-2" />
                          <span>Nutrition tips and advice</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-neem-500 mr-2" />
                          <span>Quick recipe suggestions</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-neem-500 mr-2" />
                          <span>Health challenge updates</span>
                        </li>
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Enter your WhatsApp number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-neem-500 hover:bg-neem-600" disabled={isSubmitted}>
                        {isSubmitted ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Connecting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Connect to WhatsApp
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 text-center">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-neem-100 text-neem-700 flex items-center justify-center mb-4">
                        <Check className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-medium text-lg">Successfully Connected!</h3>
                    <p className="text-muted-foreground">
                      You'll receive a WhatsApp message from our bot shortly. Save the number to start receiving
                      personalized nutrition updates.
                    </p>
                    <Badge className="mx-auto bg-neem-100 text-neem-700 hover:bg-neem-200">WhatsApp Connected</Badge>
                    <Button className="w-full bg-neem-500 hover:bg-neem-600 mt-4" onClick={() => setIsOpen(false)}>
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Continue to Aahara
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
