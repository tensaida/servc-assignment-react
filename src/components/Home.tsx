import { useState, useEffect } from 'react'
import { getList } from '../api/pokemons.api'
import Post from '../components/Post'

function Home() {
    const [posts, setPosts] = useState<Post[]>([])
  
    interface Post {
      name: string;
      url: string;
    }
  
    useEffect(() => {
      getList(0, 9).then(values => setPosts(values.data.results))
    })
  
    console.log('hmm')
    
    return (
      
  
  <ul>
  {posts.map((post:Post) => <Post post={post} />)}
  </ul>
    );
}

export default Home;