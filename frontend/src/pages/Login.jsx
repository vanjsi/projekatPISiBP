import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()
    
    const handleLogin=async()=>{
        try{
            const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
            // console.log(res.data)
            setUser(res.data)
            navigate("/")

        }
        catch(err){
            setError(true)
            console.log(err)

        }
    }

    return(
        <>
        <div className="flex items-center bg-gray-400 justify-between px-6 md:px-[200px] py-12">
        <h1 className="text-lg md:text-xl text-white font-extrabold"><Link to="/">Extra News</Link></h1>
        <h3 className="text-white font-extrabold"><Link to="/register">Registruj se</Link></h3>
        </div>
        <div className="w-full flex justify-center bg-pink-100 items-center h-[80vh] ">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                <h1 className="text-xl text-pink-700 font-bold text-left">Uloguj se na svoj nalog</h1>
                <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-pink-700 outline-0" type="text" placeholder="Unesi svoj email" />
                <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-pink-700 outline-0" type="password" placeholder="Unesi svoju sifru" />
                <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-pink-700 text-white bg-pink-500 rounded-lg hover:bg-gray-400 hover:text-pink-700">Uloguj se</button>
                {error && <h3 className="text-black font-bold text-md">Proverite email ili sifru</h3>}
                <div className="flex justify-center italic items-center space-x-3">
                    <p>Nemate nalog?</p>
                    <p className="text-gray-500 hover:text-black underline"><Link to="/register">Registruj se</Link></p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login

