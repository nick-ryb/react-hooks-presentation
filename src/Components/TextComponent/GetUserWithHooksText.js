const GetUserWithHooksText = `
import React,{useState,useEffect} from 'react'

const GetUserHooks = ({gender}) => {
    const [user,setUser] = useState(null)
    
    useEffect(() => {
        fetch(\`https://randomuser.me/api/?gender=\${gender}\`)
    .then(resp => resp.json())
    .then(res => setUser(res.results[0]))
    .catch(console.error)
    },[gender])

    return user ? <UserCard user={user}/>:
    <Heading textColor="primary">Loading...</Heading>
    
}

export default GetUserHooks`

export default GetUserWithHooksText