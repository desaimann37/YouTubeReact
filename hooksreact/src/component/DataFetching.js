import React,{useState , useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post , setPost] = useState({});
    const [id , setId] = useState(1)
    const [click , setClick] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    } , [click])
    const handleClick = ()=>{
        setClick(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Post</button>
      {/* <ul>
        {
            post.map((po)=> (
                <li key = {po.id}>{po.title}</li>
            ))
        }
      </ul> */}
      <div>{post.title}</div>
    </div>
  )
}

export default DataFetching
