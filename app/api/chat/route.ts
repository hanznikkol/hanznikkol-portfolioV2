import { portfolioContext } from "@/data/PortfolioContext"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const {message} = await req.json()

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [
                {
                    role: 'system',
                    content: portfolioContext
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            temperature: 0.7
        })
    })

    const data = await response.json()

    return NextResponse.json({
        reply: data?.choices?.[0]?.message?.content || "I don't know 😅"
    })

}