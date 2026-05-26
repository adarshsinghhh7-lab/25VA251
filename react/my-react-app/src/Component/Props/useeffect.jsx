import React, { useEffect, useState } from 'react'

function UseEffects() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h1>UseEffect Example {counter}</h1>
            <h2>{counter}</h2>
        </>
    )
}

export default UseEffects