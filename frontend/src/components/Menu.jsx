import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"


const Menu=()=>{
    const {user}=useContext(UserContext)
    const {setUser}=useContext(UserContext)

    const handleLogout=async()=>{
        try{
            const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
            console.log(res)
            setUser(null)

            
        }
        catch(err){
            console.log(err)

        }
    }
    return(
        <div className="bg-pink-200 w-[200px] flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
            {!user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer">Uloguj se</h3>}
            {!user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer">Registruj se</h3>}
            {user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer">Profil</h3>}
            {user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer">Napisi</h3>}
            {user &&<h3 className="text-black text-sm hover:text-gray-500 cursor-pointer">Moje vesti</h3>}
            {user &&<h3 onClick={handleLogout} className="text-black text-sm hover:text-gray-500 cursor-pointer">Odjavi se</h3>}

        </div>
    )
}

export default Menu