import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type UserData = {
    id: number
    age: number
    name: string
}

async function getUser() {
    const response = await axios.get<UserData[]>('db.json')
    return response.data
}

function Query() {

const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,

})


  return (
      <div>
        {isLoading && 'Loading...'}
        {data?.map((user) => (
            <div style={{
                border: '1px solid #f8f8f8',
                borderRadius: '8px',
                fontWeight: '300',
                marginBottom: '1rem',
                padding: '1rem',
            
            }}>
                <h2>{user.name}</h2>
                <div style={{display: 'flex', gap: '.7rem'}}>
                  <p><b>Idade:</b> {user.age}</p>
                  <p><b>ID:</b> {user.id}</p>
                </div>
                <button>Editar</button>
            </div>
        ))}
        </div>
  )
}

export default Query