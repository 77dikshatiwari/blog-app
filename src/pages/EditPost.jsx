import React, { useEffect, useState } from 'react'
import {Container, PostForm} from '../components'
// import PostForm  from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/conffig'

const EditPost = () => {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
               if(post){
                setPosts(post)
               } 
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])
    
  return post ? (
  <div className='py-8'>
    <Container>
      <PostForm post={post} />
            </Container>
  </div>): null
}

export default EditPost
