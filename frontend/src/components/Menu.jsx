import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"


const Menu=()=>{
    const {user}=useContext(UserContext)
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try{
            const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
            //console.log(res)
            setUser(null)
            navigate("/login")
            
        }
        catch(err){
            console.log(err)

        }
    }
    return(
        <div className="bg-pink-200 w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
            {!user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">Uloguj se</Link></h3>}
            {!user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer"><Link to="/register">Registruj se</Link></h3>}
            {user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer"><Link to={"/profile/"+user._id}>Profil</Link></h3>}
            {user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Napisi</Link></h3>} 
            {user &&<h3 onClick={handleLogout} className="text-black text-sm hover:text-gray-500 cursor-pointer">Odjavi se</h3>}

        </div>
    )
}

export default Menu