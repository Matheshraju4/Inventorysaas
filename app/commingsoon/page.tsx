"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Rocket } from 'lucide-react'
import { sendEmail } from '@/lib/mongo'

export default function Component() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    const response = await sendEmail(email)
    console.log(response)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket size={24} />
          </div>
          <CardTitle className="text-2xl font-bold">Coming Soon</CardTitle>
          <CardDescription>Be the first to know when we launch!</CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Notify Me
              </Button>
            </form>
          ) : (
            <div className="text-center text-green-600">
              Thank you! We&apos;ll notify you when we launch.
            </div>
          )}
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          We respect your privacy and won&apos;t share your email.
        </CardFooter>
      </Card>
    </div>
  )
}
