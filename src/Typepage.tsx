import { useRef, useState } from "react"

  const data = [
    { id: 1, name: 'Rafael', age: 23 },
    { id: 2, name: 'Ana', age: 12 },
    { id: 3, name: 'Flavia', age: 27 },
    { id: 4, name: 'Renato', age: 43 }
  ]

  type PeopleProps = { 
    id: number
    name: string
    age: number 
}

type PeopleAddress = {
    zipCode: number | string
    Street: number
    Neighborhood: string
}

type Customers = PeopleProps & PeopleAddress

const Typepage = () => {
 
  const [rowSelect, setRowSelect] = useState<PeopleProps | null>(null)
  const [userId, setUserId] = useState<number | null>(null)
  
  const handleRowSelect = (data: PeopleProps ) => {
    setRowSelect(data)
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleCOmplexCalc = (a: number, b: number) => {
    if(a > b) return a + b

    return a - b
  }

  const simpleCalc = (a:number, b:number): string  =>  {
    return (a * b).toString()
  }

  return (
    <div>
        <h2>Type</h2>

        <h2>{rowSelect?.name}</h2>

        {data.map((people) => (
            <div 
              key={people.id}
              onClick={() => handleRowSelect(people)} 
              style={{cursor: 'pointer', padding: '.5em'}}>
                name: {people.name} - age: {people.age}
            </div>
        ))}

        <form onSubmit={(data) => {
            console.log(inputRef.current?.value)
            data.preventDefault()
            }}>
            <input type="text" ref={inputRef} />
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Typepage