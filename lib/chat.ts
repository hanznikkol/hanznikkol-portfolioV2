export const sendChatMessage = async(message: string) => {
    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })

    if (!res.ok) {
        throw new Error('Failed to fetch chat response')
    }

    return res.json()
}