import { useEffect, useState } from "react"

const Children = () => {
        console.log('children')
        
        return (
            <div>
         <h2>Children</h2>
      </div>
    )
}
const Component = ({ children } : { children: React.ReactNode }) => {
    const [clickCount, setClickCount] = useState(0)
    
    const handleClick = () => {
      setClickCount(prev => prev + 1)
    }
    
    useEffect(() => {
        window.addEventListener('click', handleClick)
        
        return () => window.removeEventListener('click', handleClick)
    }, [])
    
    return (
        <div>
        <h2>Clicks: {clickCount}</h2>
        {children}
      </div>
    )
}


export const Composition = () => {
    return (
        <Component>
            <Children />
        </Component>
    )

}