import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './context/UserContext'
import MyNews from './pages/MyNews'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'


const App = () => {
  return(
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/contact" element={<Contact/>}/>        
        <Route exact path="/termsofuse" element={<TermsOfUse/>}/>        
        <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>        
        <Route exact path="/write" element={<CreatePost/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/mynews/:id" element={<MyNews/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
    </UserContextProvider>
     
    
  )
}

export default App