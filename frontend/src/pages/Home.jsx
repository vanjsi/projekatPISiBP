import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useEffect, useState } from "react"
import Loader from '../components/Loader'
import { Link, useLocation } from "react-router-dom"

const Home = () => {
  
  const {search}=useLocation()
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[search])

  return (
    <>
    <Navbar/>
    <div className="px-8 md:px-[200px] bg-pink-100 min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center"><Loader/></div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link key={post._id} to={`/posts/post/${post._id}`}>
              <HomePosts post={post}/>
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold underline italic mt-16">Nije pronađena nijedna objava</h3>
        )}
    </div>
    <Footer/>
    </>
  )
}

export default Home
